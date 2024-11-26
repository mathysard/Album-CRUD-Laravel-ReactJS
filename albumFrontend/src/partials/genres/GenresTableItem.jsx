import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function GenresTableItem({ genre }) {
    const navigate = useNavigate();
    const deleteGenre = async (id) => {
        await axios.delete(`http://localhost:8000/api/genres/${id}`)
        navigate('/genres')
    }
    return (
        <tr key={genre.id} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2">{genre?.id}</td>
            <td className="px-4 py-2">{genre?.name}</td>
            <td className="px-4 py-2 flex space-x-2">
                <Link to={`/genres/edit/${genre.id}`} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Editer</Link>
                <button onClick={() => deleteGenre(genre.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Supprimer</button>
            </td>
        </tr>
    )
}

export default GenresTableItem