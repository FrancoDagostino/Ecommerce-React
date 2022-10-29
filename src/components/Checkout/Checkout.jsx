import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { alertConfirm } from '../../helpers/sweetAlert';
import { saveOrder } from '../../services/firebase/firestore';
import { Form } from '../Form/Form';



export const Checkout = () => {

    const {cart,totalCart,clearCart} = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(false);
    const createOrder = async (buyer) => {
      const orderObj = {
        buyer,
        items: cart,
        total: totalCart
        }
        setIsLoading(true)
        const resp = await saveOrder(cart,orderObj,clearCart)
        if(resp){
          alertConfirm('La compra fue realizada con exitó');
          setIsLoading(false)
        }
    }

    return(
      <div>
        {
          isLoading 
          ? <h1>...Cargando</h1> 
          : <Form createOrder={createOrder}/>
        }
      </div>
    )
}

