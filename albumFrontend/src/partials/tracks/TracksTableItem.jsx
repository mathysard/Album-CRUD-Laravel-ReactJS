import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function TracksTableItem({ track }) {
    const navigate = useNavigate();
    const deleteTrack = async (id) => {
        await axios.delete(`http://localhost:8000/api/tracks/${id}`)
        navigate('/tracks')
    }
    return (
        <tr key={track.id} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2">{track?.id}</td>
            <td className="px-4 py-2">{track?.name}</td>
            <td className="px-4 py-2">{track?.milliseconds}</td>
            <td className="px-4 py-2">{track?.unit_price}</td>
            <td className="px-4 py-2">{track?.album?.title}</td>
            <td className="px-4 py-2">{track?.genre?.name}</td>
            <td className="px-4 py-2 flex space-x-2">
                <Link to={`/tracks/edit/${track.id}`} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Editer</Link>
                <button onClick={() => deleteTrack(track.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Supprimer</button>
            </td>
        </tr>
    )
}

export default TracksTableItem