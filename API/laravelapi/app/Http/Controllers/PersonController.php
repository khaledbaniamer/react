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

    public function showSingleApi($id)
    {
        $singleApi = Person::find($id);
        return $singleApi;
    }

    public function updateData($id , Request $request)
    {
        $updateApi = Person::find($id);
        $updateApi->name = $request->name;
        $updateApi->email = $request->email;

        $updateApi->save();
    }
}
