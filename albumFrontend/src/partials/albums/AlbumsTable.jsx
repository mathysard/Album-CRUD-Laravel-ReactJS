import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AlbumsTableItem from './AlbumsTableItem'

function AlbumsTable() {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        try {
            const fetchAlbums = async () => {
                const response = await axios.get('http://localhost:8000/api/albums')
                const data = response.data.data
                console.log(data)
                setAlbums(data)
            }
            fetchAlbums()
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
                        <th className="w-3/12 px-4 py-2">Titre</th>
                        <th className="w-3/12 px-4 py-2">Artiste</th>
                        <th className="w-3/12 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map(album => (
                        <AlbumsTableItem key={album.id} album={album} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AlbumsTable