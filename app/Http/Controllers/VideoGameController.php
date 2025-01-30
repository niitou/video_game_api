<?php

namespace App\Http\Controllers;

use App\Models\VideoGame;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class VideoGameController extends Controller
{
    /* Read */
    public function index(VideoGame $model)
    {
        return Inertia::render('VGDashboard', [
            'vgData' => $model->paginate(25),
            'count' => $model->count(),
        ]);
    }
    /* Create */
    public function store(Request $request, VideoGame $model)
    {
        $model->create($request->validate([
            'title' => 'required|string|max:255',
            'release_date' => 'nullable|date',
            'developer' => 'nullable|string|max:255',
            'publisher' => 'nullable|string|max:255',
            'genres' => 'nullable|string|max:255',
            'product_rating' => 'nullable|in:C,E,E+10,T,M,Ao', // Enum validation
            'user_score' => 'nullable|numeric|between:0,10', // Validates float and range
            'platforms' => 'nullable|array', // Ensures platforms is an array
            'platforms.*' => 'nullable|string|max:255', // Ensures each platform in the array is a string
        ]));

        return back()->with('message', 'Video game added successfully');
    }
    /* Update */
    public function update(Request $request, VideoGame $model, $vg_id)
    {
        // You need this for encountering Log the incoming request data
        // And you can view this logs at storage/logs/laravel.log
        Log::info('Update request received for Video game ID: ' . $vg_id);
        Log::info('Update request data: ', $request->all());


        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:video_game,title,' . $vg_id, // Unique validation with exclusion
            'release_date' => 'nullable|date',
            'developer' => 'nullable|string|max:255',
            'publisher' => 'nullable|string|max:255',
            'genres' => 'nullable|string|max:255',
            'product_rating' => 'nullable|in:C,E,E+10,T,M,Ao', // Enum validation
            'user_score' => 'nullable|numeric|between:0,10', // Numeric validation
            'platforms' => 'nullable|array', // Ensures platforms is an array
            'platforms.*' => 'nullable|string|max:255', // Each platform in the array must be a string
        ]);

        $video_game = $model->findOrFail($vg_id);

        $video_game->update($validated);

        return back()->with('message', 'Video game updated successfully');
    }
    /* Delete */
    public function destroy(VideoGame $model, $vg_id)
    {
        $video_game = $model->findOrFail($vg_id);

        $video_game->delete();

        // You can also use redirect()->route('your_directory')
        return back()->with('message', 'Video game deleted successfully');
    }

}
