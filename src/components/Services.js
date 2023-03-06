import React from "react";
import axios from "axios";

const api = "http://localhost:8080/api/note";

class NoteServices {

    getAllNotes(){
        return axios.get(api)
    }

    saveNotes(notes){
        return axios.post(api, notes)
    }

    getNoteById(noteId){
        return axios.get(api + '/'+noteId)
    }

    updateNote(noteId, notes){
        return axios.put(api+'/'+noteId, notes)
    }

    deleteNote(noteId){
        return axios.delete(api+'/'+noteId)
    }
}

export default new NoteServices