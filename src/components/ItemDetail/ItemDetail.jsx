import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { alertConfirm } from "../../helpers/sweetAlert";
import { ItemCounter } from "../ItemCounter/ItemCounter";

export const ItemDetail = ({id,img,price,name,stock}) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const {onAddProduct,isProductExist} = useContext(CartContext);

    const quantityExist = isProductExist(id);


    const onAddQuantity = (quantity)=>{
        setQuantityToAdd(quantity);

        const productToAdd = {id,price,name,quantity};
        
        onAddProduct(productToAdd,id);

        alertConfirm('El producto fue agregado al carrito');
    }




  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    
                    <div className="product">
                            <img src={img} alt="" width="280px" height="280px" />
                            <div className="product__info">
                                <span className="product__send">Envío con normalidad</span>
                                <span className="product__price">$ {price}</span>
                                <span className="product__costo">Envío gratis</span>
                                <span className="product__description">{name}</span>
                        </div>
                    </div>
                <div>
                    <p>ACA VA EL DETALLE DEL PRODUCTO.. PROXIMO A IMPLEMENTAR</p>
                    {
                        quantityToAdd === 0 
                        ?<ItemCounter onAddQuantity={onAddQuantity} initialValue={quantityExist} stock={stock}/>
                        :<Link to="/cart">Finalizar Compra</Link>
                    }
                </div>
            </div>
  )
}
