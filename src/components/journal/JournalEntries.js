import React from 'react';
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    const {notes} = useSelector(state => state.notes);
    const notesGen = Array.from(notes);

    return (
        <div className="journal__entries">
            {
                notesGen.map(note => (
                    <JournalEntry 
                        key= {note.id}
                        { ...note } 
                    />
                ))

            }
        </div>
    )
}
