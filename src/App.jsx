import React from "react"
import 'toolcool-range-slider'
import Toggle from "./Toggle"
import ColorTool from "./ColorTool"
import {Context} from "./Context"


function Header(){
  return(
    <h1 className="title">Color Lighten/Darken</h1>
  )
}

function Input(){

  let {hex , handleChange} = React.useContext(Context)

  return(
    <div>
      <div className="colorHex">
        <label htmlFor="hex">Color (Hex)</label>

        <input type="text"
              name="hex"
              placeholder="#c6d5ac"
              value={hex}
              onChange={handleChange}
              className="hexInput"/>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Header />
      <Input />
      <Toggle />
      <ColorTool />
    </div>
  )
}

export default App
