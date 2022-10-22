import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [totalCart, setTotalCart] = useState(0);


    const onAddProduct = (productoToAdd,productId)=>{
        const productExist = cart.filter(c => c.id !== productId)
        setCart([...productExist,productoToAdd]);
    }

    const isProductExist = (productId)=>{
        const productExist = cart.filter(c => c.id === productId)
        if(productExist){
            return productExist[0]?.quantity
        }
        
        return 0;
    }

    useEffect(()=>{
        const totalCart = getTotalCart();
        setTotalCart(totalCart);
    },[cart])

    const onDelete = (productoId)=>{
        const ProductWitout = cart.filter(c => c.id !== productoId );

        setCart(ProductWitout);
    }

    const getTotalQuantity = ()=>{
        let totalQuantity = 0

        cart.forEach(c => {
            totalQuantity += c.quantity
        })

        return totalQuantity;
    }

    const getTotalCart = ()=>{
        let totalCart = 0

        cart.forEach(c=>{
            totalCart += c.price * c.quantity
        })

        return totalCart
    }

    const clearCart=()=>{
        setCart([])
    }


  return (
    <CartContext.Provider value={{onAddProduct,onDelete,getTotalQuantity,isProductExist,cart,totalCart,clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

