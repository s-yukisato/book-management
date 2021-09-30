import { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router';

import axios from 'axios';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import SaveIcon from '@mui/icons-material/Save';

import AppBar from '../components/AppBar';


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
    const { id: projectId } = useParams();

    const history = useHistory();
    history.block('このページを離れますか？');

    const [result, setReuslt] = useState();
    const [prevContent, setPrevContent] = useState();

    const [quill, setQuill] = useState();

    useEffect(() => {
        if (quill == null) return

        const loadproject = async () => {
            await axios.get(`http://localhost:3001/api/v1/project/${projectId}`)
                .then(res => {
                    quill.setContents(res.data)
                    quill.enable()
                })
                .catch(err => {
                    history.replace("/projects")
                })
        }
        loadproject();

    }, [quill, projectId, history])

    const handleSave = async () => {
        if (quill == null) return
        const contents = quill.getContents();
        const contentBody = contents.ops[0].insert


        if (prevContent !== contentBody) {
            setReuslt("");
            await axios
                .put(`http://localhost:3001/api/v1/project/${projectId}`, contents)
                .then((res) => setReuslt("保存しました"))
                .catch((err) => setReuslt("エラーが発生しました"));

            setPrevContent(contentBody);
        } else {
            setReuslt("保存しました");
        }
    }


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
            <Typography
                variant="body2"
                sx={{ position: "fixed", bottom: "70px", right: "30px" }}
            >{result}</Typography>
            <Button
                onClick={handleSave}
                variant="contained"
                startIcon={<SaveIcon />}
                sx={{ position: "fixed", bottom: "30px", right: "30px" }}
            >保存</Button>
        </>
    )
}

export default TextEditor;