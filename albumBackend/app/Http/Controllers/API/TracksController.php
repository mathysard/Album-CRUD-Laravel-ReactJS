<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController;
use App\Models\Track;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TracksController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $tracks = Track::withTrashed()->with('album', 'genre')->get();
            return $this->handleResponse($tracks, 'Tracks retrieved successfully');
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
                'album_id' => 'required',
                'genre_id' => 'required',
                'milliseconds' => 'required',
                'unit_price' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->handleError($validator->errors());
            }

            $track = Track::create($input);
            return $this->handleResponse($track, 'Track created successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Track $track)
    {
        try {
            $track = Track::withTrashed()->with('album', 'genre')->find($track->id);
            return $this->handleResponse($track, 'Track retrieved successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Track $track)
    {
        try {
            $input = $request->all();

            $validator = Validator::make($input, [
                'name' => 'required',
                'album_id' => 'required',
                'genre_id' => 'required',
                'milliseconds' => 'required',
                'unit_price' => 'required'
            ]);

            if ($validator->fails()) {
                return $this->handleError($validator->errors());
            }

            $track->name = $input['name'];
            $track->album_id = $input['album_id'];
            $track->genre_id = $input['genre_id'];
            $track->milliseconds = $input['milliseconds'];
            $track->unit_price = $input['unit_price'];
            $track->save();

            return $this->handleResponse($track, 'Track updated successfully');
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
            $track = Track::find($id);
            $track->delete();
            return $this->handleResponse($track, 'Track deleted successfully');
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
            $track = Track::withTrashed()->find($id);
            $track->restore();
            return $this->handleResponse($track, 'Track restored successfully');
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }
}
