import React from "react";
import NotesItemButton from "./NotesItemButton";
import { showFormattedDate } from "../utils";


export default function NotesItemCard({note,onDelete, onArchive}) {
    const isArchived = note.archived;
    return (
        <div className="item-card">
            <div className="top">
                <h3>{note.title}</h3>
            </div>
            <div className="center">
                <p>{note.body}</p>
                <br />
                <p>{showFormattedDate(note.createdAt)}</p>
            </div>
            <div className="footer">
                <NotesItemButton clickAction={() => onArchive(note.id)} name={isArchived ? 'Unarchive' : 'Archive'}/>
                <NotesItemButton clickAction={() => onDelete(note.id)} name="Delete"/>
            </div>
        </div>
    );
}