import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({id,img,price,name,quantity}) => {

    const {onDelete} = useContext(CartContext)

  return (
    <div style={{display:'flex',justifyContent:'space-around',margin:'50px 0 50px 0'}}>

        <div>
            <img src={img} alt={name}/>
        </div>
        <div>
            <h4>{name}</h4>
        </div>
        <div>
          <h4>precio x unidad: ${price}</h4>
        </div>
        <div>
          <h4>cantidad: {quantity}</h4>
        </div>
        <div>
          <h4>subtotal: ${price * quantity}</h4>
        </div>
        <div>
          <button onClick={() => onDelete(id)}>Eliminar</button>
        </div>
    </div>
  )
}
