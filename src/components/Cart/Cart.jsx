import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem';
import {Link} from 'react-router-dom';
export const Cart = () => {

    const {cart,getTotalQuantity,totalCart,clearCart} = useContext(CartContext);

    const totalQuantity = getTotalQuantity();

    if(totalQuantity === 0) return <h1>No hay items en el carrito</h1>

    const styles = {
      btnSuccess:{
        border: '3px solid rgba(100,100,100,0.1)',
        padding: '10px',
        width: '300px',
        fontSize: '16px',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor:'rgb(52,131,250)',
        color:'#fff',
        margin:'20px',
        '&:hover':{
            backgroundColor:  '#fc354c',	
            cursor: 'pointer',
        }
      }
    }
  return (
    <div>
        {cart.map(c=>(
            <CartItem key={c.id} {...c} />
        ))}
        <h3>Total: ${totalCart}</h3>
        <div style={{display:'flex', justifyContent:'center',margin:'20px'}}>
          <div>

        <button style={styles.btnSuccess} onClick={() => clearCart()}>Limpiar Carrito</button>
        <div>
          <button style={styles.btnSuccess}>
            <Link to='/checkout' style={{textDecoration:'none'}}>Checkout</Link>
          </button>
        </div>
        </div>
        </div>
    </div>
  )
}
