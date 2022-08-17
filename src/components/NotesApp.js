import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import NotesNavbar from "./NotesNavbar";
import { getNotesData, saveNotesData } from "../utils";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Notes: getNotesData(),
            isRecentList: true,
            searchNote: ''
        }
        this.onAddNote = this.onAddNote.bind(this);
        this.onDeleteNote = this.onDeleteNote.bind(this);
        this.onArchiveNote = this.onArchiveNote.bind(this);
        this.setNotesList = this.setNotesList.bind(this);
        this.onSearchNotes = this.onSearchNotes.bind(this);
    }

    onSaveStateNote(data) {
        this.setState({ Notes: data });
        saveNotesData(data);
    }

    onAddNote({ title, body }) {
        const date = new Date();
        const Notes = [
            ...this.state.Notes, {
                id: +date,
                title,
                body,
                archived: false,
                createdAt: `${date}`
            }
        ]
        this.onSaveStateNote(Notes);

        // this.setState((prevState) => {
        //     return {
        //         Notes: [
        //             ...prevState.Notes, {
        //                 id: +date,
        //                 title,
        //                 body,
        //                 archived: false,
        //                 createdAt: `${date}`
        //             }
        //         ]
        //     }
        // });
        alert('New note created !');
    }

    onDeleteNote(id) {
        if (window.confirm("Delete note ?")) {
            const Notes = this.state.Notes.filter((note) => note.id !== id);
            this.onSaveStateNote(Notes);
        } else {

        }
    }

    onArchiveNote(id) {
        const Notes = this.state.Notes.map((note) => {
            if (note.id === id) {
                note.archived = !note.archived
                return note
            } else {
                return note
            }
        });
        this.onSaveStateNote(Notes)
    }

    setNotesList(isRecent) {
        this.setState({ isRecentList: isRecent });
    }
    onSearchNotes(event) {
        this.setState({ searchNote: event.target.value });
    }

    render() {
        return (
            <main>
                <div className="left">
                    <div>
                        <h1>CREATE   +<br />NEW NOTES</h1>
                        <NotesInput addNote={this.onAddNote} />
                    </div>
                </div>
                <div className="right">
                    <div>
                        <NotesNavbar
                            setRecentList={this.setNotesList}
                            onSearchNotes={this.onSearchNotes}
                            isRecentList={this.state.isRecentList}
                        />
                        <NotesList
                            notes={this.state.Notes}
                            onDelete={this.onDeleteNote}
                            onArchive={this.onArchiveNote}
                            isRecentList={this.state.isRecentList}
                            searchList={this.state.searchNote}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default NotesApp;