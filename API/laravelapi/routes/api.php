<?php

use App\Http\Controllers\PersonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('add_person' , [PersonController::class , 'addData']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});