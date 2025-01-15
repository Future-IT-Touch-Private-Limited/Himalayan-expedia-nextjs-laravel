<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    //
    protected $fillable = [
        "title",
        "cover_img",
        "tour_type",
        "groupSize",
        "ratting",
        "country",
        "city",
        "price",
        "stay_information",
        "img",
        "days",
        "slug",
        "cityname",
        "toggle_show"
    ];

    protected $casts = [
        "stay_information" => "array",
        "img" => "array",
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($product) {
            if (empty($product->slug)) {
                $product->slug = Str::slug($product->title);
            }
        });
    }
}
