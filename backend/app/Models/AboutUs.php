<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUs extends Model
{
    //
  protected $fillable=[
"banner_img",
"banner_text",
"banner_des",
"our_vission",
"about_text",
"about_img",
"faq"
  ];
protected $casts=[
  "our_vission"=>"array"  ,
  "about_img"=>"array",
  "faq"=>"array",
];

}
