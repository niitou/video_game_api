<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('video_game', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->date('release_date')->nullable(true);
            $table->string('developer')->nullable(true);
            $table->string('publisher')->nullable(true);
            $table->string('genres')->nullable(true);
            $table->enum('product_rating', ['C', 'E', 'E+10', 'T', 'M', 'Ao'])->nullable(true);
            $table->float('user_score')->nullable(true);
            $table->json('platforms');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('video_game');
    }
};
