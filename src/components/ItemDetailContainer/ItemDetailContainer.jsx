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
    }

    useEffect(() => {
        consumirApi();
    })
    
  return (
    <div>
        {
            isLoading 
                ? <h1>...Cargando</h1> 
                :         <div>
                <h2>DETALLES DEL PRODUCTO</h2>
                <Item {...product}/>
            </div>
        }
    </div>
    
  )
}
