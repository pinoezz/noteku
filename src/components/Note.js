// src/components/Note.js
import React, { useState } from "react";
import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

const Note = () => {
    const [note, setNote] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (note) {
            await addDoc(collection(db, "notes"), {
                text: note,
                timestamp: new Date(),
            });

            setNote(""); // Reset note input
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-xl mb-4">Add a New Note</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Write your note here..."
                    className="p-2 border rounded"
                    rows="4"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Note</button>
            </form>
        </div>
    );
};

export default Note;
