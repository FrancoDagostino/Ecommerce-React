import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Item } from '../Item/Item'
import { getDocs,collection,query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

export const ItemList =  () => {
  /* Utilizar useEffect, Utilizar UseState, Consumir api de productos*/

 const [product, setProduct] = useState([])
 const [isLoading, setIsLoading] = useState(true);
 const {categoryId} = useParams();

  useEffect(()=>{
    setIsLoading(true)

    const collectionRef = categoryId
      ? query(collection(db,'products'),where('category','==',categoryId))
      : collection(db,'products')

    getDocs(collectionRef).then(response => {
      const productAdapted = response.docs.map(doc =>{
        const data = doc.data();
        return{
          id: doc.id, ...data
        }
      })
      setProduct(productAdapted)
      setIsLoading(false)
    })
  },[categoryId])
    return (
      <div className="product-grid" >
      {
        isLoading ? 
                  <h1>...Cargando</h1> 
        :
                  product.map(p=>(
                    <Item key={p.id} {...p}/>
                  ))
      }
    </div>
  )
}
