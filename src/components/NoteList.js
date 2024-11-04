// src/components/NoteList.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; 
import { collection, onSnapshot } from "firebase/firestore"; 

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
            const notesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNotes(notesData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl mb-4">Notes</h2>
            <ul className="space-y-2">
                {notes.map(note => (
                    <li key={note.id} className="p-2 border rounded">
                        {note.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
