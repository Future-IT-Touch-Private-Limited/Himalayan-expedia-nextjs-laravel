<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ALlTourController extends Controller
{
    //
    public function getAlltours()
    {
        $Product = Product::all()->select("cover_img", "toggle_show", "title", "cityname", "days", "price", "ratting", "slug", "tour_type");
        return $Product;
    }

    public function getfiltercity(string $slug)
    {
        $query = Product::select("cover_img",  "title", "cityname", "days", "price", "ratting", "slug", "tour_type");

        // Apply the filter if cityname is provided
        if (!empty($slug)) {
            $query->where('cityname', $slug);
        }

        // Fetch the results
        $products = $query->get();

        return $products;
    }

    public function getServicename()
    {
        $products = Product::select("cover_img",  "title", "cityname", "days", "price", "ratting", "slug", "tour_type")->where('toggle_show', 1)->get();
        return $products;
    }
    

    public function getSingleTour(string $slug)
    {
        $Product = Product::where("slug", $slug)->first();
        return $Product;
    }
}
