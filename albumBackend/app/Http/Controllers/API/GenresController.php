<?php

namespace App\Http\Controllers\API;

use App\Models\Genre;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\Validator;

class GenresController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $genres = Genre::withTrashed()->with('tracks')->get();
            return $this->handleResponse($genres, 'Genres retrieved successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $input = $request->all();

            $validator = Validator::make($input, [
                'name' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->handleError($validator->errors());
            }

            $genre = Genre::create($input);
            return $this->handleResponse($genre, 'Genre created successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Genre $genre)
    {
        try {
            $genre = Genre::withTrashed()->with('tracks')->find($genre->id);
            return $this->handleResponse($genre, 'Genre retrieved successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Genre $genre)
    {
        try {
            $input = $request->all();

            $validator = Validator::make($input, [
                'name' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->handleError($validator->errors());
            }

            $genre->name = $input['name'];
            $genre->save();

            return $this->handleResponse($genre, 'Genre updated successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $genre = Genre::withTrashed()->with('tracks')->get();
            $genre->delete();
            return $this->handleResponse($genre, 'Genre deleted successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */

    public function restore($id)
    {
        try {
            $genre = Genre::withTrashed()->find($id);
            $genre->restore();
            return $this->handleResponse($genre, 'Genre restored successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }
}
