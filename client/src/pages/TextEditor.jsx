import { useState, useEffect, useCallback } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import axios from 'axios'

import AppBar from '../components/AppBar';

import { useParams } from 'react-router'

// const SAVE_INTERVAL_MS = 2000

const TOOLBAR_OPTIONS = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
]

const TextEditor = () => {
    const { id: documentId } = useParams();
    console.log(documentId)

    const [quill, setQuill] = useState();

    useEffect(() => {
        if (quill == null) return

        const loadDocument = async () => {
            await axios.get(`http://localhost:3001/api/v1/document/${documentId}`)
                .then(response => {
                    quill.setContents(response)
                    quill.enable()
                })
        }
        loadDocument();

    }, [quill, documentId])

    // useEffect(() => {
    //     if (quill == null) return

    //     const interval = setInterval(() => {

    //     }, SAVE_INTERVAL_MS)

    //     return () => {
    //         clearInterval(interval)
    //     }

    // }, [quill])


    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        const q = new Quill(editor,
            {
                theme: "snow",
                modules: {
                    toolbar: TOOLBAR_OPTIONS
                }
            })
        q.disable()
        q.setText('Loading...')
        setQuill(q)
    }, [])

    return (
        <>
            <AppBar />
            <div className="container" ref={wrapperRef}></div>
        </>
    )
}

export default TextEditor;