import React from "react";

export default function Box(props) {

  // console.log(`props.on ${props.on}`)

  const [state, setState] = React.useState(props.on)
  // console.log(`state ${state}`)

  function toggle() {
    setState(prevState => prevState === true ? false : true)
    // setState(prevState => !prevState)
    // ^clever way to toggle
  }

  const styles = {
      backgroundColor: state ? "#222222" : "#cccccc",
      color: state ? "white" : "black",
      border: state ? "0.25rem solid white" : "0.25rem solid black"
  }

  const monkey = state ? "🙈" : "🙉";

  return (
    <div style={styles} onClick={toggle} className="box">{props.id}{monkey}</div>
  )
} 

// there is a better way to structure the application
// so that STATE is ONLY held in the App Component

// there might be situations where creating STATE in each one of the Child Components
// and initialising that STATE based on the incoming PROP might make sense

// however general consensus is that if you find yourself initialising STATE by using the incoming value of some prop
// there is probably a better way to do this

// See AppTwo/BoxTwo

// DERIVED STATE