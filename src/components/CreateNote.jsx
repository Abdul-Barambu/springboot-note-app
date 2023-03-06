import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Services from './Services'


const CreateNote = () => {

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const history = useHistory()
    const {id} = useParams()

    const notes = { title, detail };

    const saveNotes = (e) => {
        e.preventDefault()

        Services.saveNotes(notes).then(res => {
            console.log(res.data)
            history.push('/')
        }).catch(e => {
            console.log(e)
        })
    }

    const updateNote = (e) => {
        e.preventDefault();

        if (id) {
            Services.updateNote(id, notes).then(res => {
                console.log(res.data)
                history.push('/')
            }).catch(e => {
                console.log(e)
            })
        }
        else{
            console.log("Not Found")
        }

    }

    useEffect(() => {
        Services.getNoteById(id).then(res => {
            setTitle(res.data.title)
            setDetail(res.data.detail)
        }).catch(e => {
            console.log(e)
        })
    }, [])


    const buttonHandler = () => {
        if (id) {
            return <button className='btn btn-success mt-4 mx-3' onClick={(e) => updateNote(e)}>Update</button>
        }
        else {
            return <button className='btn btn-success mt-4 mx-3' onClick={(e) => saveNotes(e)}>Save</button>
        }
    }

    return (
        <div>
            <div class="mb-3 mx-2">
                <label htmlfor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text"
                    className="form-control"
                    placeholder="Title"
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div class="mb-3 mx-2">
                <label htmlfor="exampleFormControlTextarea1" className="form-label">Body Content</label>
                <textarea rows={3}
                    className='form-control'
                    name='detail'
                    value={detail}
                    type="text"
                    onChange={(e) => setDetail(e.target.value)} />
            </div>
            {buttonHandler()}
        </div>
    )
}

export default CreateNote
