<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VideoGame>
 */
class VideoGameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->words(3, true), // Generates a fake title with 3 words
            'release_date' => $this->faker->date(), // Generates a random date
            'developer' => $this->faker->company(), // Generates a random company name
            'publisher' => $this->faker->company(), // Generates a random company name
            'genres' => $this->faker->randomElement(['Action', 'Adventure', 'RPG', 'Shooter', 'Sports']), // Random genre
            'product_rating' => $this->faker->randomElement(['C', 'E', 'E+10', 'T', 'M', 'Ao']), // Random product rating
            'user_score' => $this->faker->randomFloat(1, 0, 10), // Generates a float between 0 and 10
            'platforms' => $this->faker->randomElements(['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'], 2, false), // Random platforms
        ];
    }
}
