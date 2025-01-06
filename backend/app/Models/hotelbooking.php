<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class hotelbooking extends Model
{
    //
    protected $table="hotel-bookings";
    protected $fillable=[
        "banner_img",
        "banner_text",
        "banner_des",
        "car_img", 
        "car_about",  
        "car_des",
        "faq",
            ];
        
            protected $casts=[
                "faq"=>"array"
            ];
}
