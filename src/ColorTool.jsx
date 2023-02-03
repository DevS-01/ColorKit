import React from "react";
import {Context} from "./Context"


function ColorTool(){

  let {hex , IsValid , per , setPer , altered , isToggle , alter , setAlter} = React.useContext(Context)

  function Setting(){
    if(!IsValid(hex)) return
     
    let strip = hex.replace('#' , '')
    return strip
  }

  function Conversion(e){
    let hexCode = IsValid(hex) ? hex : null
  
    setPer(e.target.value)
  
    const value = isToggle ? -per : +per
    let alterText  = altered(hexCode , value)
    setAlter(alterText)
  }


  let styles = {
    backgroundColor: `#${Setting()}`
  }

  let alterStyle = {
    backgroundColor: alter
  }

    return(
      <div>
        <div className="Slider">     
          <label htmlFor="slider" className="slider">{`${per}%`}</label>
          <input 
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            onChange={Conversion}
            name="slider"/>           
        </div>
        <p>Input Color</p>
        <div className="box" style={styles}></div>
        <p>{`Altered Color ${alter}`}</p>
        <div className="box" style={alterStyle}></div>
      </div>
    )
}

export default ColorTool