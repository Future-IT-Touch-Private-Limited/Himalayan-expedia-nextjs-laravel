<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table="contects";
    protected $fillable=[
"banner_img",
"banner_text",
"banner_des",
"img",
"email",
"whatsapp_number",
"contect_number",
"address",
"coordinate"
    ];


}
