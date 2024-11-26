import React from 'react'
import TracksSubmit from '../../partials/tracks/TracksSubmit'
import { useParams } from 'react-router-dom'

function TracksForm() {

    const { id } = useParams()
    return (
        <>
            <h1 className="text-xl font-bold mb-5">{id ? 'Editer' : 'Ajouter'} un Track</h1>
            <TracksSubmit />
        </>
    )
}

export default TracksForm