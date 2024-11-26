<?php

namespace App\Http\Controllers\API;

use App\Models\Artist;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\Validator;

class ArtistsController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $artists = Artist::withTrashed()->with('albums')->get();
            return $this->handleResponse($artists, 'Artists retrieved successfully');
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
                'name' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->handleError($validator->errors());
            }

            $artist = Artist::create($input);

            return $this->handleResponse($artist, 'Artist created successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Artist $artist)
    {
        try {
            $artist = Artist::withTrashed()->with('albums')->find($artist->id);
            return $this->handleResponse($artist, 'Artist retrieved successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Artist $artist)
    {
        try {

            $input = $request->all();

            $validator = Validator::make($input, [
                'name' => 'required',
            ]);

            if ($validator->fails()) {
                return $this->handleError($validator->errors());
            }

            $artist->name = $input['name'];
            $artist->save();

            return $this->handleResponse($artist, 'Artist updated successfully');
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
            $artist = Artist::withTrashed()->with('albums')->get();
            $artist->delete();
            return $this->handleResponse([], 'Artist deleted successfully');
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
            $artist = Artist::withTrashed()->find($id);
            $artist->restore();
            return $this->handleResponse($artist, 'Artist restored successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }
}
