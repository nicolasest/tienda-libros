import React from 'react'
import Button from '@mui/material/Button';
export const CheckOut = ({formSubmit, capturaNombre, capturaApellido}) => {
  return (
    <>
    <h1>hl</h1>
    <form onSubmit={formSubmit}>
        <input type="text"  placeholder='Ingresa tu nombre' onChange={capturaNombre}/>
        <input type="text"  placeholder='Ingresa tu apellido' onChange={capturaApellido} />
        <Button variant="contained" type='submit' > Enviar</Button>
    </form>
    </>
  )
}
