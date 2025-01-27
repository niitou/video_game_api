<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VideoGameController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/vgdashboard", [VideoGameController::class, 'index'])->middleware(["auth","verified"])->name("vgdashboard");

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    /* Video Game */
    Route::post('/addVg', [VideoGameController::class, 'store'])->name('addVideoGame.store');
    Route::patch('/updateVg/{id}', [VideoGameController::class, 'update'])->name('updateVideoGame.update');
    Route::delete('/deleteVg/{id}', [VideoGameController::class, 'destroy'])->name('deleteVideoGame.destroy');
});



require __DIR__.'/auth.php';
