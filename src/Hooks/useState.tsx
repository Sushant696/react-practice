import { useState } from "react"

export const UseStateHook  =() => {
const [click , setclick] = useState<string>('');

const singleClick = () => {
    setclick("welcome sire")
}
const doubleClick =() => {
    setclick("welcome to the secret portal");
}

    return (
    <>
    <h3> Login  {click}</h3>
    <button onClick={singleClick} onDoubleClick={doubleClick} >click me</button>
    </>
    )
}


// the state will do something like if user click one it does one thing and if user double click than something else happens 

// can do something like updating the name with age using state hook