import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function GenresSubmit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [genre, setGenre] = useState({})

    useEffect(() => {
        if (id) {
            try {
                const fetchGenre = async () => {
                    const response = await axios.get(`http://localhost:8000/api/genres/${id}`)
                    const data = response.data.data
                    console.log(data)
                    setGenre(data)
                }
                fetchGenre()
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
                const response = await axios.put(`http://localhost:8000/api/genres/${id}`, genre)
                console.log(response)
                navigate('/genres')
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                const response = await axios.post('http://localhost:8000/api/genres', genre)
                console.log(response)
                navigate('/genres')
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
                    <input type="text" id="name" name="name" value={genre?.name} className="border border-gray-200 rounded px-4 py-2" onChange={(e) => setGenre({ ...genre, name: e.target.value })} />
                </div>
                -<div className="flex flex-col">
                    <input type="submit" value="Enregistrer" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600" />
                </div>
            </form>

        </>
    )
}

export default GenresSubmit