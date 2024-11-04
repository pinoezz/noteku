// src/App.js
import React from 'react'; // Hanya satu baris pengimporan React
import Note from './components/Note';
import NoteList from './components/NoteList';

function App() {
    return (
        <div className="App">
            <h1 className="text-2xl text-center p-4">Collaborative Notes</h1>
            <Note />
            <NoteList />
        </div>
    );
}

export default App;
