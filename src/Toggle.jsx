import React from "react";
import {Context} from "./Context"


function Toggle(){
  const {change} = React.useContext(Context)

    return(
      <div className="toggle">
        <p className="light">Light</p>
  
        <div className="toggleBtn" onClick={change}>
          <div className="circle"></div>
        </div>
  
        <p className="dark">Dark</p>
      </div>
    )
}

export default Toggle