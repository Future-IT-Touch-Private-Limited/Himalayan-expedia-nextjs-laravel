<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ALlTourController extends Controller
{
    //
public function getAlltours(){
$Product=Product::all()->select("cover_img","title","days","price","ratting","slug","tour_type");
return $Product;
}
public function getSingleTour(string $slug){
    $Product=Product::where("slug",$slug)->first();
    return $Product;
}


}
