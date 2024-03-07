import './ItemCount.css'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ItemCount = ({counter, addOne, disabled, stock,subOne, onAdd}) => {
    return (
      <>
<Stack spacing={4} direction="row" >
<Button variant="contained"  onClick={subOne} disabled={ counter === 1 ? true : false}>-</Button>
      <h4>{counter}</h4>
      <Button variant="contained" onClick={addOne} disabled={ counter === stock ? true : false}>+</Button>
    
      <Button variant="contained" onClick={()=>onAdd(counter)} >Agregar al carrito</Button>
    
</Stack>
      </>
    )
  }