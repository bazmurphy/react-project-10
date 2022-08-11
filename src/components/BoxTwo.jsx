import React from "react"

export default function BoxTwo(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc",
        color: props.on ? "white" : "black",
        border: props.on ? "0.25rem solid white" : "0.25rem solid black",
    }
    
    return (
        <div style={styles} className="box" onClick={ () => props.toggle(props.id) }></div>
        // [2]
        // ^ but we can hand it our OWN FUNCTION which runs props.toggle

        // [1]
        // <div style={styles} className="box" onClick={props.toggle(id)}></div>
        // ^ you cannot pass a parameter to the function toggle (which will be used on an eventListener)
        // for example an id parameter
        // because the eventHandler function is Automatically passed the eventObject which is describing the event
    )
}