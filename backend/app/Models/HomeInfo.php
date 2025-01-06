<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeInfo extends Model
{
    protected $fillable=[
"logo",
"whatsapp_number",
"mobile_number",
"email",
"banner_imgs",
"slider_imgs",
"facebooklink",
"instagramlink",
"youtubelink",
"color"
    ];
    protected $casts=[
        "banner_imgs"=>"array",
        "slider_imgs"=>"array"

    ];

}
