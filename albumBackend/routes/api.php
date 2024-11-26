<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('artists', App\Http\Controllers\API\ArtistsController::class);
Route::apiResource('albums', App\Http\Controllers\API\AlbumsController::class);
Route::apiResource('tracks', App\Http\Controllers\API\TracksController::class);
Route::apiResource('genres', App\Http\Controllers\API\GenresController::class);


// restore routes

Route::get('/artists/{artist}/restore', 'App\Http\Controllers\API\ArtistsController@restore');
Route::get('/albums/{album}/restore', 'App\Http\Controllers\API\AlbumsController@restore');
Route::get('/tracks/{track}/restore', 'App\Http\Controllers\API\TracksController@restore');
Route::get('/genres/{genre}/restore', 'App\Http\Controllers\API\GenresController@restore');
