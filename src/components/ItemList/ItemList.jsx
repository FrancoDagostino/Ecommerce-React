import { useParams } from 'react-router-dom'
import { Item } from '../Item/Item'
import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'

export const ItemList =  () => {

  const {categoryId} = useParams()
  const {data:product,isLoading} = useAsync(() => getProducts(categoryId),[categoryId])


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
