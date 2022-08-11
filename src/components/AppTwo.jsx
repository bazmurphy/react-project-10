import React from "react"
import '../App.css'
import boxesTwo from "../data/boxesTwo"
import BoxTwo from "./BoxTwo"

export default function AppTwo() {

	const [boxesArray, setBoxesArray] = React.useState(boxesTwo)

	function toggle(id) {
		setBoxesArray(prevBoxesArray => {
			const newBoxesArray = []
			for (let i = 0; i < prevBoxesArray.length; i++) {
				const currentBox = prevBoxesArray[i]
				if (currentBox.id === id) {
					const updatedBox = {
						...currentBox,
						on: !currentBox.on
					}
					newBoxesArray.push(updatedBox)
				} else {
					newBoxesArray.push(currentBox)
				}
			} 
			return newBoxesArray
		})
	}

	// ^ you cannot pass a parameter to the function toggle (which will be used on an eventListener)
	// for example an id parameter
	// because the eventHandler function is Automatically passed the eventObject which is describing the event
	// Object { _reactName: "onClick", _targetInst: null, type: "click", nativeEvent: click, … }
	
	const boxesElements = boxesArray.map(element => {
		return (
			<BoxTwo 
					key={element.id}
					// you cannot use props.key from the Child Component it is a REACT restriction!
					id={element.id}
					// ^so we have to create a second prop to use the ID from our Data Set
					on={element.on} 
					toggle={toggle}
				/>
			)
		}
	)
	
	return (
			<div className="boxes-container">{boxesElements}</div>
	)
}


/**
 * Challenge: use setSquares to update the
 * correct square in the array.
 * 
 * Make sure not to directly modify state!
 * 
 * Hint: look back at the lesson on updating arrays
 * in state if you need a reminder on how to do this
 */