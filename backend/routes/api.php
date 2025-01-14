<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PopularCityController;

use App\Http\Controllers\ALlTourController;

use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\ContactController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get("/v1/alltours",[ALlTourController::class,"getAlltours"]);
Route::get("/v1/singletours/{slug}",[ALlTourController::class,"getSingleTour"]);
Route::get("/v1/alltours/{slug}",[ALlTourController::class,"getfiltercity"]);

// getfiltercity

Route::get("/v1/contact",[ContactController::class,"getContact"]);
Route::get("/v1/about",[ContactController::class,"getabout"]);
Route::post("/v1/message",[ContactController::class,"sendMessage"]);
Route::get("/v1/coachrental",[ContactController::class,"getCoachRental"]);
Route::get("/v1/hotelbooking",[ContactController::class,"gethotelbooking"]);
Route::get("/v1/gethomeinfo",[ContactController::class,"gethomeinfo"]);


    
Route::get('v1/testimonial', [TestimonialController::class, 'index']);

Route::get('v1/popular-cities', [PopularCityController::class, 'index']);