<?php

namespace App\Http\Controllers\API;

use App\Models\Album;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\Validator;

class AlbumsController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $albums = Album::withTrashed()->with('artist', 'tracks')->get();
            return $this->handleResponse($albums, 'Albums retrieved successfully');
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
                'title' => 'required',
                'artist_id' => 'required'
            ]);


            if ($validator->fails()) {
                return $this->handleError($validator->errors());
            }

            $album = Album::create($input);

            return $this->handleResponse($album, 'Album created successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Album $album)
    {
        try {
            $album = Album::withTrashed()->with('artist', 'tracks')->find($album->id);
            return $this->handleResponse($album, 'Album retrieved successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Album $album)
    {
        try {
            $input = $request->all();

            $validator = Validator::make($input, [
                'title' => 'required',
                'artist_id' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->handleError($validator->errors());
            }

            $album->title = $input['title'];
            $album->artist_id = $input['artist_id'];
            $album->save();

            return $this->handleResponse($album, 'Album updated successfully');
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
            $album = Album::withTrashed()->with('artist', 'tracks')->get();
            $album->delete();
            return $this->handleResponse($album, 'Album deleted successfully');
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
            $album = Album::withTrashed()->find($id);
            $album->restore();
            return $this->handleResponse($album, 'Album restored successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }
}
