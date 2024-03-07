import React from 'react'
import Button from '@mui/material/Button';
export const CheckOut = ({formSubmit, captura}) => {
  return (
    <>
    <h1>hl</h1>
    <form onSubmit={formSubmit}>
        <input type="text" name='name' placeholder='Ingresa tu nombre' onChange={captura}/>
        <input type="text" name='lastName' placeholder='Ingresa tu apellido' onChange={captura} />
        <Button variant="contained" type='submit' > Enviar</Button>
    </form>
    </>
  )
}
