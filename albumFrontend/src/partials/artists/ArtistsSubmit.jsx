import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function ArtistsSubmit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [artist, setArtist] = useState([])

    useEffect(() => {
        if (id) {
            try {
                const fetchArtist = async () => {
                    const response = await axios.get(`http://localhost:8000/api/artists/${id}`)
                    const data = response.data.data
                    console.log(data)
                    setArtist(data)
                }
                fetchArtist()
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
                const response = await axios.put(`http://localhost:8000/api/artists/${id}`, artist)
                console.log(response)
                navigate('/artists')
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                const response = await axios.post('http://localhost:8000/api/artists', artist)
                console.log(response)
                navigate('/artists')
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
                    <input type="text" id="name" name="name" value={artist?.name} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setArtist({ ...artist, name: e.target.value })} />
                </div>
                <div className="flex flex-col">
                    <input type="submit" value="Enregistrer" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600" />
                </div>
            </form>

        </>
    )
}

export default ArtistsSubmit