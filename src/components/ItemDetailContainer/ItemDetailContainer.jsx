import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch'
import { Item } from '../Item/Item';

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    const consumirApi = async()=>{
        const {producto} =await getFetch('https://restserver-node-producto.herokuapp.com/api/productos');
        const productFilter = producto.find(p => p._id === id)
        setProduct(productFilter);
        setIsLoading(false);
        console.log(producto)
    }

    useEffect(() => {
        consumirApi();
    },[id])
    
  return (
    <div>
        <h2>DETALLES DEL PRODUCTO</h2>
        {
            isLoading 
                ? <h1>...Cargando</h1> 
                :<div style={{display:'flex',justifyContent:'space-evenly'}}>
                    
                <div >
                    <Item {...product}/>
                </div>
                <div>
                    <p>ACA VA EL DETALLE DEL PRODUCTO.. PROXIMO A IMPLEMENTAR</p>
                </div>
            </div>
        }
    </div>
    
  )
}
