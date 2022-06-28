<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function addData(Request $request){
        
        $person = new Person();
        
        $person->name = $request->name;
        $person->email = $request->email;

        $stutas =  $person->save();

    }

    public function showApi (){
        $api = Person::all();
        return $api;
    }
}
