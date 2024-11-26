import React from 'react'
import ArtistsTable from '../../partials/artists/ArtistsTable'
import { Link } from 'react-router-dom'

function AlbumsList() {
    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-xl font-bold">Liste des Artistes</h1>
                <Link to="/artists/add" className="px-4 py-2 text-lg bg-blue-500 text-white rounded">Ajouter un Artiste</Link>
            </div>
            <ArtistsTable />
        </>
    )
}

export default AlbumsList