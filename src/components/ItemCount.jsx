import React, { useState } from 'react'


const ItemCount = () => {

    const [contador, setContador] = useState(0)
//proxima entrega contador = producto.stock
    const sumar = () => {
        if (contador === 10) {
           alert("ah llegado al maximo stock") 
        } else {
        
         setContador(contador + 1)
        }
      }
    
      const restar = () => {
        
        if (contador < 1) {
          alert("no se puede ingresar cantidades negativas")
        } else {
          setContador(contador -1)
        }
      }

    return (
        <div className='cantidadCarrito'>
            <button onClick={ sumar }>+</button>
                <h5>{contador}</h5>
            <button onClick={ restar }>-</button> 
        </div>
    )
}

export default ItemCount

