import React from "react";


export default function NotesNavbar({isRecentList, setRecentList, onSearchNotes}) {
    return (
        <div className="navbar">
            <ul className="">
                <li><button className={isRecentList ? 'active' : ''} onClick={() => setRecentList(true)}>Recent</button></li>
                <li><button className={isRecentList ? '' : 'active'} onClick={() => setRecentList(false)}>Archived</button></li>
            </ul>
            <div>
                <input className="search-input" type="search" placeholder="Search" onChange={onSearchNotes} ></input>
            </div>
        </div>
    );
}