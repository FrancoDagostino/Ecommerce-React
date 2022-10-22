import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {productId} = useParams();

    useEffect(()=>{
      setIsLoading(true)
  
      const docRef = doc(db,'products',productId)
  
      getDoc(docRef).then(doc => {
        const data = doc.data()
        const productAdapted = {
            id: doc.id, ...data
        }
        setProduct(productAdapted)
      }).finally(()=>{
        setIsLoading(false) 
      })
    },[productId])
  return (
    <div>
        <h2>DETALLES DEL PRODUCTO</h2>
        {
            isLoading 
                ? <h1>...Cargando</h1> 
                :<ItemDetail {...product}/>
        }
    </div>
    
  )
}
