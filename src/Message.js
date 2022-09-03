import React from "react";

function Message(props){
    return (
        <div>
            <h1 style={{color:'green'}}>Привет {props.name}</h1>
        </div>
    );
}

export default Message;