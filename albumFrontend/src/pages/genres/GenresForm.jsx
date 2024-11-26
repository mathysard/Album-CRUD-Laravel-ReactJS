import React from 'react'
import GenresSubmit from '../../partials/genres/GenresSubmit'
import { useParams } from 'react-router-dom'

function GenresForm() {

    const { id } = useParams()
    return (
        <>
            <h1 className="text-xl font-bold mb-5">{id ? 'Editer' : 'Ajouter'} un Genre</h1>
            <GenresSubmit />
        </>
    )
}

export default GenresForm