<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
      // Specify the fillable fields
      protected $fillable = ['img', 'name', 'position', 'review', 'heading'];
}
