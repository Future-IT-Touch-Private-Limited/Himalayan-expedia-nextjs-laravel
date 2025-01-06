<?php

namespace App\Http\Controllers;
use App\Models\Contact;
use App\Models\AboutUs;
use Illuminate\Http\Request;
use App\Models\Messages;
 use App\Models\CoachRental;
 use App\Models\hotelbooking;
 use App\Models\HomeInfo;

 
class ContactController extends Controller
{
  public  function getContact(){
    $Contact=Contact::first();
    return $Contact ;
   }

   public  function getabout(){
    $AboutUs=AboutUs::first();
    return $AboutUs ;
   }

   public function sendMessage(Request $request){
  $validate=$request->validate([
    "to"=>"required",
"from"=>"required",
"name"=>"required",
"number"=>"required",
"date"=>"required",]);



    Messages::create([
  "to"=>$validate["to"],
"from"=>$validate["from"],
"name"=>$validate["name"],
"number"=>$validate["number"],
"date"=>$validate["date"],
"trip"=>$request["trip"]
]);

return response()->json(["message"=>"message sent successfully","success"=>true ]);

   }

   public function getCoachRental(){
   $CoachRental=  CoachRental::first();
return $CoachRental;

// return "okk";
   }

   public function gethotelbooking(){
    $hotelbooking=  hotelbooking::first();
 return $hotelbooking;
 
 // return "okk";
    }
    public function gethomeinfo(){
      $HomeInfo=HomeInfo::first();
      return $HomeInfo;
  }

}
