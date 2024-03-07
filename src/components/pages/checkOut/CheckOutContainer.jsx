import { useState } from "react"
import { CheckOut } from "./CheckOut"

export const CheckOutContainer = () => {
    const [name, setName] = useState("")
    const [lastName, SetLastName] = useState("")
    const formSubmit = (e)=>{
        e.preventDefault()

console.log(name)
console.log(lastName)
    }

    const capturaNombre = (event)=>{
        setName(event.target.value)
    }
    const capturaApellido = (event)=>{
        SetLastName(event.target.value)
    }
  return (
   <CheckOut formSubmit={formSubmit} capturaNombre={capturaNombre} capturaApellido={capturaApellido}/>
  )
}
