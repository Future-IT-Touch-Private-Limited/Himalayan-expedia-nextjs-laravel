<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PopularCity;

class PopularCityController extends Controller
{
    public function index()
    {
        // Fetch all popular cities
        $popularCities = PopularCity::all();

        // Return the cities as JSON or a view
        return response()->json($popularCities);
    }
}
