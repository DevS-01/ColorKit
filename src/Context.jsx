import React from "react";


const Context = React.createContext()

function Provider(props){

    let [per , setPer] = React.useState(0)
    let [hex , setHex] = React.useState('')
    let [alter , setAlter] = React.useState('#c6d5ac')

    const [isToggle , setToggle] = React.useState(false)


    function IsValid(hex){
        if(!hex) return false
    
        let strip = hex.replace('#' , '')
        return strip.length === 3 || strip.length === 6
    }

    function convertToRGB(hex)
    {
        if(!IsValid(hex)) return null

        let strip = hex.replace('#' , '')
        if(strip.length === 3){
            strip = strip[0] + strip[0] + strip[1] + strip[1] + strip[2] + strip[2]
        }

        let r = parseInt(strip.substring(0,2) , 16)
        let g = parseInt(strip.substring(2,4) , 16)
        let b = parseInt(strip.substring(4,6) , 16)

        return {r,g,b}
    }

    function convertToHex(r,g,b){

        let first = ('0' + r.toString(16)).slice(-2)
        let second = ('0' + g.toString(16)).slice(-2)
        let third = ('0' + b.toString(16)).slice(-2)

        let hexCode = "#" + first + second + third
        return hexCode
    } 


    function increment(amount , hex){
        return Math.min(255 , Math.max(0 , hex+amount))
    }

    function altered(hexValue , percentage)
    {
        let rgb = convertToRGB(hexValue)
        
        let R = increment(Math.floor((percentage / 100 ) * 255) , rgb.r)
        
        let G = increment(Math.floor((percentage / 100 ) * 255) , rgb.g)
        
        let B = increment(Math.floor((percentage / 100 ) * 255) , rgb.b)
        
        let newHex = convertToHex(R,G,B)
        return newHex
        
    }

    function handleChange(e){
      setHex(e.target.value)   
    }



    function change(e){
        setToggle(prev => !prev)
        
        if(e.target.classList.contains("toggled") && isToggle)
        {
            e.target.classList.remove("toggled")
        }
        
        else{
            e.target.classList.add("toggled")
        }
      } 

    return (
            <Context.Provider value={{hex , handleChange , IsValid , per , altered , setPer , change , isToggle , alter , setAlter}}>
                {props.children}
            </Context.Provider>
    )
}

export {Provider , Context}