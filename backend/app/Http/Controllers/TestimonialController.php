<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;


class TestimonialController extends Controller
{
    public function index()
    {
        // Fetch all testimonials
        $testimonials = Testimonial::all();

        // Return the testimonials as JSON or a view
        return response()->json($testimonials);
    }
}
