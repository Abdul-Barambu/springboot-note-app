import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Services from './Services'

const ViewNote = () => {

    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const {id} = useParams();

    useEffect(() => {
        if(id){
            Services.getNoteById(id).then(res => {
                setNotes(res.data)
            }).catch(e => {
                console.log(e)
            })
        }
    }, [])

  return (
    <div>
      {
                    notes.map(note => <ul key={note.id}>
                        <div className='card'>
                            <div className="card-body">
                                <li><h2>{note.title}</h2></li>
                                <h4>{note.detail}</h4>
                            </div>
                        </div>
                    </ul>)
                }
    </div>
  )
}

export default ViewNote
