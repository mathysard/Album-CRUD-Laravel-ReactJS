import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function TracksSubmit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [track, setTrack] = useState({})
    const [albums, setAlbums] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(() => {
        try {
            const fetchAlbums = async () => {
                const response = await axios.get('http://localhost:8000/api/albums')
                const data = response.data.data
                setAlbums(data)
            }

            const fetchGenres = async () => {
                const response = await axios.get('http://localhost:8000/api/genres')
                const data = response.data.data
                setGenres(data)
            }

            fetchAlbums();
            fetchGenres()
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        if (id) {
            try {
                const fetchTrack = async () => {
                    const response = await axios.get(`http://localhost:8000/api/tracks/${id}`)
                    const data = response.data.data
                    console.log(data)
                    setTrack(data)
                }
                fetchTrack()
            } catch (error) {
                console.error(error
                )
            }
        }
    }, [id])

    const onSubmit = async (e) => {
        e.preventDefault()
        if (id) {
            try {
                const response = await axios.put(`http://localhost:8000/api/tracks/${id}`, track)
                console.log(response)
                navigate('/tracks')
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                const response = await axios.post('http://localhost:8000/api/tracks', track)
                console.log(response)
                navigate('/tracks')
            } catch (error) {
                console.error(error)
            }
        }
    }
    return (
        <>
            <form className="flex flex-col space-y-5" onSubmit={onSubmit}>
            <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold">Nom</label>
                    <input type="text" id="name" name="name" value={track?.name} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setTrack({ ...track, name: e.target.value })} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="milliseconds" className="text-sm font-semibold">Millisecondes</label>
                    <input type="text" id="milliseconds" name="milliseconds" value={track?.milliseconds} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setTrack({ ...track, milliseconds: e.target.value })} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="unit_price" className="text-sm font-semibold">Prix à l'unité</label>
                    <input type="text" id="unit_price" name="unit_price" value={track?.unit_price} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setTrack({ ...track, unit_price: e.target.value })} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="album" className="text-sm font-semibold">Album</label>
                    <select name="album_id" id="album" value={track?.album_id} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setTrack({ ...track, album_id: e.target.value })}>
                        <option value="" disabled>Choisir un album</option>
                        {albums.map((album) => (
                            <option key={album.id} value={album.id}>{album.title}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="genre" className="text-sm font-semibold">Genre</label>
                    <select name="genre_id" id="genre" value={track?.genre_id} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setTrack({ ...track, genre_id: e.target.value })}>
                        <option value="" disabled>Choisir un genre</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <input type="submit" value="Enregistrer" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600" />
                </div>
            </form>

        </>
    )
}

export default TracksSubmit