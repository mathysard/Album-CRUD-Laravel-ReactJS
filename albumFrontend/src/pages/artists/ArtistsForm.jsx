import React from 'react'
import ArtistsSubmit from '../../partials/artists/ArtistsSubmit'
import { useParams } from 'react-router-dom'

function ArtistsForm() {

    const { id } = useParams()
    return (
        <>
            <h1 className="text-xl font-bold mb-5">{id ? 'Editer' : 'Ajouter'} un Artiste</h1>
            <ArtistsSubmit />
        </>
    )
}

export default ArtistsForm