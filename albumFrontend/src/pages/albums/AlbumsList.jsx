import React from 'react'
import AlbumsTable from '../../partials/albums/AlbumsTable'
import { Link } from 'react-router-dom'

function AlbumsList() {
    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-xl font-bold">Liste des Albums</h1>
                <Link to="/albums/add" className="px-4 py-2 text-lg bg-blue-500 text-white rounded">Ajouter un Album</Link>
            </div>
            <AlbumsTable />
        </>
    )
}

export default AlbumsList