import React from 'react'
import GenresTable from '../../partials/genres/GenresTable'
import { Link } from 'react-router-dom'

function GenresList() {
    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-xl font-bold">Liste des Genres</h1>
                <Link to="/genres/add" className="px-4 py-2 text-lg bg-blue-500 text-white rounded">Ajouter un Genre</Link>
            </div>
            <GenresTable />
        </>
    )
}

export default GenresList