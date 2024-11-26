import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function ArtistsTableItem({ artist }) {
    const navigate = useNavigate();
    const deleteArtist = async (id) => {
        await axios.delete(`http://localhost:8000/api/artists/${id}`)
        navigate('/artists')
    }
    return (
        <tr key={artist.id} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2">{artist?.id}</td>
            <td className="px-4 py-2">{artist?.name}</td>
            <td className="px-4 py-2 flex space-x-2">
                <Link to={`/artists/edit/${artist.id}`} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Editer</Link>
                <button onClick={() => deleteArtist(artist.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Supprimer</button>
            </td>
        </tr>
    )
}

export default ArtistsTableItem