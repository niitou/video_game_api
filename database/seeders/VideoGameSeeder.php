<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\VideoGame;

class VideoGameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        VideoGame::factory()->count(50)->create();
    }
}
