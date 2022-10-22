import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem';
import {Link} from 'react-router-dom';
export const Cart = () => {

    const {cart,getTotalQuantity,totalCart,clearCart} = useContext(CartContext);

    const totalQuantity = getTotalQuantity();

    if(totalQuantity === 0) return <h1>No hay items en el carrito</h1>


  return (
    <div>
        {cart.map(c=>(
            <CartItem key={c.id} {...c} />
        ))}
        <h3>Total: ${totalCart}</h3>
        <button onClick={() => clearCart()}>Limpiar Carrito</button>
        <Link to='/checkout'>Checkout</Link>
    </div>
  )
}
