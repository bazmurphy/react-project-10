import React from "react"
import '../App.css'
import boxesThree from "../data/boxesThree"
import BoxThree from "./BoxThree"

export default function AppThree() {

	const [boxesArray, setBoxesArray] = React.useState(boxesThree)

	function toggle(id) {
		setBoxesArray(prevBoxesArray => {
			return prevBoxesArray.map((element) => {
				return element.id === id ? {...element, on: !element.on} : element
			})
		})
	}
	
	const boxesElements = boxesArray.map(element => {
		return (
			<BoxThree 
				key={element.id} 
				id={element.id}
				// you cannot use props.key (its a REACT restriction)
				// so we have to create a second prop to use the ID from our Data Set
				on={element.on} 
				toggle={toggle}

				// toggle = { () => toggle(square.id) }
				// this is a clever solution ^
				// you create an individualised toggle function
				// and you give pass the element.id immediately
				// this creates something called a Closure
				// each instance of Box will have its own toggle, and it will remember it's own ID
				// so we can remove the id prop id={element.id}
				// and in the Child Component we can change the onClick from:
				// onClick={ () => props.toggle(props.id) } 
				// to:
				// onClick={toggle}
			/>
			)
		}
	)
	
	return (
			<div className="boxes-container">{boxesElements}</div>
	)
}