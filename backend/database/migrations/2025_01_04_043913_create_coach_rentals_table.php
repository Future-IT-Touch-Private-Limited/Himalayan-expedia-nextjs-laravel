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
        Schema::create('coach_rentals', function (Blueprint $table) {
            $table->id();
            $table->string("banner_img");
            $table->string("banner_text");
           $table->string("banner_des");
           $table->string("car_img");
           $table->text("car_des");
$table->json("faq");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coach_rentals');
    }
};
