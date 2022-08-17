import React from "react";
import NotesItemCard from "./NotesItemCard";


function NotesList({ notes, onDelete, onArchive, isRecentList, searchList }) {
    let notesToShow;
    isRecentList
        ? notesToShow = notes.filter((note) => !note.archived && note.title.toLowerCase().includes(searchList.toLowerCase()))
        : notesToShow = notes.filter((note) => note.archived && note.title.toLowerCase().includes(searchList.toLowerCase()));

    return (
        <div className="notes-list">
            {notesToShow.length
                ? notesToShow.slice(0)
                    .reverse().map((note) => {
                        return (
                            <NotesItemCard
                                key={note.id}
                                note={note}
                                onDelete={onDelete}
                                onArchive={onArchive}
                            />
                        );
                    })
                : <p>No note</p>
            }
        </div>
    );
}


export default NotesList;