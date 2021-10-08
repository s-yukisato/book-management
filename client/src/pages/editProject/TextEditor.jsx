import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';

import axios from 'axios';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import { API_URI } from '../../config'
import { useRedirect } from '../../hooks/useRedirect';


const TOOLBAR_OPTIONS = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
];


const TextEditor = ({ isSave, setIsSave, setProjectData, setResult }) => {
    const { id: projectId } = useParams();

    const { toProjectsPage } = useRedirect();

    const [prevContent, setPrevContent] = useState();

    const [quill, setQuill] = useState();

    useEffect(() => {
        if (quill == null) return;

        const loadProject = async () => {
            await axios.get(`${API_URI}/api/v1/project/${projectId}`)
                .then(res => {
                    setProjectData(res.data)
                    quill.setContents(res.data.document)
                    quill.enable()
                })
                .catch(err => toProjectsPage())
        }
        loadProject();

    }, [quill, projectId])

    useEffect(() => {
        // ループを制御
        if (!isSave) return;

        const saveDocument = async () => {
            if (quill == null) return
            const contents = quill.getContents();
            const contentBody = contents.ops[0].insert
    
            // 前回保存した内容と同じ時に処理をしない
            if (prevContent !== contentBody) {
                setResult("");
                await axios
                    .put(`${API_URI}/api/v1/project/${projectId}`, contents)
                    .then((res) => setResult("保存しました"))
                    .catch((err) => setResult("エラーが発生しました"));
    
                setPrevContent(contentBody);
            } else {
                setResult("保存しました");
            }
        }
        saveDocument();
        return () => {
            setIsSave(false);
        }
    }, [isSave]);


    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return;

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
    }, []);

    return <div className="container" ref={wrapperRef}></div>
}

export default TextEditor;