import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AlbumsList from './pages/albums/AlbumsList'
import AlbumsForm from './pages/albums/AlbumsForm'
import ArtistsList from './pages/artists/ArtistsList'
import ArtistsForm from './pages/artists/ArtistsForm'
import GenresList from './pages/genres/GenresList'
import GenresForm from './pages/genres/GenresForm'
import TracksList from './pages/tracks/TracksList'
import TracksForm from './pages/tracks/TracksForm'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/albums' element={<AlbumsList />} />
          <Route path='/albums/add' element={<AlbumsForm />} />
          <Route path='/albums/edit/:id' element={<AlbumsForm />} />
          <Route path='/artists' element={<ArtistsList />} />
          <Route path='/artists/add' element={<ArtistsForm />} />
          <Route path='/artists/edit/:id' element={<ArtistsForm />} />
          <Route path='/genres' element={<GenresList />} />
          <Route path='/genres/add' element={<GenresForm />} />
          <Route path='/genres/edit/:id' element={<GenresForm />} />
          <Route path='/tracks' element={<TracksList />} />
          <Route path='/tracks/add' element={<TracksForm />} />
          <Route path='/tracks/edit/:id' element={<TracksForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
