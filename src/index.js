import React from 'react';
import {createRoot} from 'react-dom/client';
import NotesApp from './components/NotesApp';
import "./styles/style.css";




const root = createRoot(document.querySelector('#root'));

root.render(<NotesApp />)
