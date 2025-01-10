<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CoachRental extends Model
{
    //
    protected $fillable=[
"banner_img",
"banner_text",
"banner_des",
"car_img",
"car_des",
"faq",
    ];

    protected $casts=[
        "faq"=>"array"
    ];
}
