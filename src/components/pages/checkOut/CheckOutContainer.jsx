import { useState } from "react"
import { CheckOut } from "./CheckOut"

export const CheckOutContainer = () => {
    const [user, setUser] = useState({
        name:"",
        lastName:""
    })
   
    const formSubmit = (e)=>{
        e.preventDefault() 
console.log(user)
    }

/*     const capturaNombre = (event)=>{
        setUser({...user, name:event.target.value})
    }
    const capturaApellido = (event)=>{
        setUser({...user, lastName:event.target.value})
    } */

    const captura =(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }
  return (
   <CheckOut formSubmit={formSubmit} captura={captura}/>
  )
}
