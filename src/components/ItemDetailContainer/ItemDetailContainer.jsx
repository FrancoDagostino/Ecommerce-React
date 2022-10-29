
import { useParams } from 'react-router-dom';
import { useAsync } from '../../hooks/useAsync';
import { getProduct } from '../../services/firebase/firestore';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

  const {productId} = useParams();
  const {data:product,isLoading}= useAsync(()=>getProduct(productId),[productId])

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
