import React from 'react'
import AlbumsSubmit from '../../partials/albums/AlbumsSubmit'
import { useParams } from 'react-router-dom'

function AlbumsForm() {

    const { id } = useParams()
    return (
        <>
            <h1 className="text-xl font-bold mb-5">{id ? 'Editer' : 'Ajouter'} un Album</h1>
            <AlbumsSubmit />
        </>
    )
}

export default AlbumsForm