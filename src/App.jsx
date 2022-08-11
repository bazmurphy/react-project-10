import React from "react"
import './App.css'
import AppOne from "./components/AppOne"
import AppTwo from "./components/AppTwo"
import AppThree from "./components/AppThree"

export default function App() {

  return (
    <div className="App">
      <h1></h1>
      <h2>Derived STATE :</h2>
      <h3>The Children Components each have their own STATE</h3>
      <img src="../images/each-child-component-with-state.png" alt="" />
      <AppOne />
      <p>Parent Component :</p>
      <img src="../images/boxes-one-parent.png" alt="" />
      <p>Child Component :</p>
      <img src="../images/boxes-one-child.png" alt="" />
      <h2>Unified STATE :</h2>
      <h3>The Parent Component has the STATE and the Children Components access it</h3>
      <img src="../images/passing-down-toggle-to-each-child-toggle-tells-parent-to-change-state.png" alt="" />
      <AppTwo />
      <p>Parent Component (Imperative) :</p>
      <img src="../images/boxes-two-parent.png" alt="" />
      <p>Child Component :</p>
      <img src="../images/boxes-two-child.png" alt="" />
      <h2>Unified STATE :</h2>
      <AppThree />
      <p>Parent Component (Declarative) :</p>
      <img src="../images/boxes-three-parent.png" alt="" />
      <p>Child Component :</p>
      <img src="../images/boxes-three-child.png" alt="" />
    </div>
  )
}
