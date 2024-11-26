import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GenresTableItem from './GenresTableItem'

function GenresTable() {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        try {
            const fetchGenres = async () => {
                const response = await axios.get('http://localhost:8000/api/genres')
                const data = response.data.data
                console.log(data)
                setGenres(data)
            }
            fetchGenres()
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/12 px-4 py-2">ID</th>
                        <th className="w-3/12 px-4 py-2">Nom</th>
                    </tr>
                </thead>
                <tbody>
                    {genres.map(genre => (
                        <GenresTableItem key={genre.id} genre={genre} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GenresTable