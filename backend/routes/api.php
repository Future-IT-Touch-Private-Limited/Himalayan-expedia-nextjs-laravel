<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
use App\Http\Controllers\ALlTourController;
Route::get("/v1/alltours",[ALlTourController::class,"getAlltours"]);
Route::get("/v1/singletours/{slug}",[ALlTourController::class,"getSingleTour"]);



use App\Http\Controllers\ContactController;
Route::get("/v1/contact",[ContactController::class,"getContact"]);
Route::get("/v1/about",[ContactController::class,"getabout"]);
Route::post("/v1/message",[ContactController::class,"sendMessage"]);
Route::get("/v1/coachrental",[ContactController::class,"getCoachRental"]);
Route::get("/v1/hotelbooking",[ContactController::class,"gethotelbooking"]);
Route::get("/v1/gethomeinfo",[ContactController::class,"gethomeinfo"]);



