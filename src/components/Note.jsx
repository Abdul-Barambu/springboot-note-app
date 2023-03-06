import React, { useEffect, useState } from 'react';
import './Note.css';
import Services from './Services';
import { RiAddCircleFill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom';


const Note = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        Services.getAllNotes().then(res => {
            setNotes(res.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    const deleteNote = (noteId) => {
        Services.deleteNote(noteId).then(res => {
            Services.getAllNotes().then(res => {
                setNotes(res.data)
            }).catch(e => {
                console.log(e)
            })
        }).catch(e => {
            console.log(e)
        })
    }

    


    return (
        <div>
            <div>
                <h1 className='note-header'>My Notes</h1>
                <Link to='/create-note' className='add-icon'><RiAddCircleFill /></Link>
            </div>


            <div>
                {
                    notes.map(note => <ul key={note.id}>
                        <div className='card'>
                            <div className="card-body">
                                <h4 className='delete-icon' onClick={() => deleteNote(note.id)}><MdDelete /></h4>
                                <h2 className='link-deco'>{note.title}</h2>
                                <h4 className='link-deco'>{note.detail}</h4>
                            </div>
                        </div>
                    </ul>)
                }
            </div>
        </div>
    )
}

export default Note
