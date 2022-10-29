import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({id,img,price,name,quantity}) => {

    const {onDelete} = useContext(CartContext)

    const styles = {
      btnEliminar:{
        border: '3px solid rgba(100,100,100,0.1)',
        padding: '10px',
        width: '100px',
        fontSize: '16px',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor:'#d62e2e',
        color:'#fff',
        '&:hover':{
            backgroundColor:  '#fc354c',	
            cursor: 'pointer',
        }
      }
    }
  return (
    <div style={{display:'flex',justifyContent:'space-around',margin:'50px 0 50px 0', backgroundColor:'#d9e1df', height:'50px',alignItems:'center',borderRadius:'20px'}}>

        <div>
          <img src={img} alt={name} width="50px" height="50px" />
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
          <button style={styles.btnEliminar} onClick={() => onDelete(id)}>Eliminar</button>
        </div>
    </div>
  )
}
