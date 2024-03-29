import { ItemCount} from './ItemCount'
import { useState} from 'react'

export const ItemCountContainer = ({ stock, onAdd, initial=1 }) => {
let disabled =()=>{
    disabled = true ? disabled = false : disabled = true
}
    const [ counter, setCounter] = useState ( initial )

    const addOne =()=>{
/* if( counter < stock){
    setCounter( counter + 1)
} */
counter < stock ? setCounter( counter + 1) : setCounter( counter + 0)
    }
    const subOne =()=>{
counter > 1 ? setCounter( counter - 1) : setCounter( counter - 0)
    }
  return (
    <>

  <ItemCount counter={counter} addOne={addOne} subOne={subOne} stock={stock} onAdd={onAdd}/>
    </>
  )
}