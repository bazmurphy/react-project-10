import React from "react"
import '../App.css'
import boxesOne from "../data/boxesOne"
import BoxOne from "./BoxOne"

export default function AppOne() {

  const [boxesArray, setBoxesArray] = React.useState(boxesOne)
  // console.log(boxesArray)

  const boxesElements = boxesArray.map(element => <BoxOne key={element.id} on={element.on}/>)
  // console.log(boxesElements)

  return (
    <div className="boxes-container">{boxesElements}</div>
  )
}

/**
 * Challenge part 1:
 * 1. Initialize state with the default value of the
 *    array pulled in from boxes.js
 * 2. Map over that state array and display each one
 *    as an empty square (black border, transparent bg color)
 *    (Don't worry about using the "on" property yet)
 */

// Challenge: use a ternary to determine the backgroundColor.
// If darkMode is true, set it to #222222
// If darkMode is false, set it to #cccccc

// const styles = {
//   backgroundColor: "lightblue",
// }

// we create a style variable, which is an object, the properties MUST match JavaScript CSS Style naming convention
// NOT CSS naming convention.. eg background-color in CSS is .style.backgroundColor in JS
// the values must be inside " "


/**
 * Challenge part 2:
 * 1. Create a separate component called "Box" and
 *    replace the `div` above with our <Box /> components
 * 2. Pass the Box component a prop called `on` with the
 *    value of the same name from the `boxes` objects
 * 3. In the Box component, apply dynamic styles to determine
 *    the backgroundColor of the box. If it's `on`, set the
 *    backgroundColor to "#222222". If off, set it to "none"
 */