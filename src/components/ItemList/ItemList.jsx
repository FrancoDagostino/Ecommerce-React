import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import { Item } from '../Item/Item'





export const ItemList =  () => {
  /* Utilizar useEffect, Utilizar UseState, Consumir api de productos*/

 const [product, setProduct] = useState([])
 const [isLoading, setIsLoading] = useState(true);
 const {id} = useParams();

 const consumirApi = async() =>{
   const {producto} =await getFetch('https://restserver-node-producto.herokuapp.com/api/productos')
   if(!id){
     setProduct(producto)
     setIsLoading(false);
   }else{
    setIsLoading(true);
    const productosFiltrado = producto.filter(p => p.categoria.toLowerCase() === id.toLowerCase());
    setProduct(productosFiltrado)
    setIsLoading(false);
   }
 }
 useEffect(() => {
   
    consumirApi();
 }, [id])
    return (
      <div className="product-grid" >
      {
        isLoading ? 
                  <h1>...Cargando</h1> 
        :
                  // <Item product={product}/>
                  
                  product.map(p=>(
                    <Item key={p._id} {...p}/>
                  ))
      }
    </div>
  )
}
