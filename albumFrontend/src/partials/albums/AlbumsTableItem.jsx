import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AlbumsTableItem({ album }) {
    const navigate = useNavigate();
    const deleteAlbum = async (id) => {
        await axios.delete(`http://localhost:8000/api/albums/${id}`)
        navigate('/albums')
    }
    return (
        <tr key={album.id} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2">{album?.id}</td>
            <td className="px-4 py-2">{album?.title}</td>
            <td className="px-4 py-2">{album?.artist?.name}</td>
            <td className="px-4 py-2 flex space-x-2">
                <Link to={`/albums/edit/${album.id}`} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Editer</Link>
                <button onClick={() => deleteAlbum(album.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Supprimer</button>
            </td>
        </tr>
    )
}

export default AlbumsTableItem