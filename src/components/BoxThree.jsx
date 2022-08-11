import React from "react"

export default function BoxThree(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc",
        color: props.on ? "white" : "black",
        border: props.on ? "0.25rem solid white" : "0.25rem solid black",
    }
    
    return (
        <div style={styles} className="box" onClick={ () => props.toggle(props.id) }></div>
    )
}