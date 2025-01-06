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
        Schema::create('home_infos', function (Blueprint $table) {
            $table->id();
            $table->string("logo");
            $table->string("whatsapp_number");
            $table->string("mobile_number");
            $table->json("banner_imgs");
            $table->json("slider_imgs");
            $table->string("email");
            $table->string(column: "facebooklink")->nullable();
            $table->string("instagramlink")->nullable();
            $table->string("youtubelink")->nullable();
            $table->string(column: "color")->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('home_infos');
    }
};
