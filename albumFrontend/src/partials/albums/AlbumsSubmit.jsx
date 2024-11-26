import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function AlbumsSubmit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [album, setAlbum] = useState({})
    const [artists, setArtists] = useState([])

    useEffect(() => {
        try {
            const fetchArtists = async () => {
                const response = await axios.get('http://localhost:8000/api/artists')
                const data = response.data.data
                setArtists(data)
            }
            fetchArtists()
        } catch (error) {
            console.error(error)
        }
    }, [])

    useEffect(() => {
        if (id) {
            try {
                const fetchAlbum = async () => {
                    const response = await axios.get(`http://localhost:8000/api/albums/${id}`)
                    const data = response.data.data
                    console.log(data)
                    setAlbum(data)
                }
                fetchAlbum()
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
                const response = await axios.put(`http://localhost:8000/api/albums/${id}`, album)
                console.log(response)
                navigate('/albums')
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                const response = await axios.post('http://localhost:8000/api/albums', album)
                console.log(response)
                navigate('/albums')
            } catch (error) {
                console.error(error)
            }
        }
    }
    return (
        <>
            <form className="flex flex-col space-y-5" onSubmit={onSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-sm font-semibold">Titre</label>
                    <input type="text" id="title" name="title" value={album?.title} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setAlbum({ ...album, title: e.target.value })} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="artist" className="text-sm font-semibold">Artiste</label>
                    <select name="artist_id" id="artist" value={album?.artist_id} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setAlbum({ ...album, artist_id: e.target.value })}>
                        <option value="" disabled>Choisir un artiste</option>
                        {artists.map((artist) => (
                            <option key={artist.id} value={artist.id}>{artist.name}</option>
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

export default AlbumsSubmit