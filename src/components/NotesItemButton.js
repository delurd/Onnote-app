import React from "react";

export default function NotesItemButton({clickAction, name}){
    return(
        <button onClick={clickAction}>{name}</button>
    )
}