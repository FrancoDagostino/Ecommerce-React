
import { addDoc,collection,getDocs,query,where,documentId, writeBatch, getDoc,doc } from 'firebase/firestore'
import { alertWarning } from '../../helpers/sweetAlert'
import { db } from '../../services/firebase'

export const getProducts = (categoryId) =>{
    return new Promise((resolve,reject)=>{
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
        resolve(productAdapted)
      })
      .catch(error =>{
        reject(alertWarning('No se pueden obtener los productos'))
      })
    })
}


export const saveOrder = async(cart,orderObj,clearCart)=>{
    try {
            
        const ids = cart.map(c => c.id);
        const productRef = collection(db,'products');
        const batch = writeBatch(db);
        const outOfStock = [];

        const {docs} = await getDocs(query(productRef,where(documentId(),'in',ids)));

        docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(c => c.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity

        if(stockDb >= prodQuantity){
            batch.update(doc.ref,{stock: stockDb - prodQuantity});
        }else{
            outOfStock.push({id: doc.id, ...dataDoc});
        }

        })

        if(outOfStock.length === 0){
            const orderRef = collection(db,'orders');

            const orderAdded = await addDoc(orderRef,orderObj);
            batch.commit();
            clearCart();
            return true
        }else{
            return outOfStock
        }

    } catch (error) {
  
    }   
}


export const getProduct = (productId)=>{
    return new Promise((resolve,reject)=>{
        const docRef = doc(db,'products',productId)
  
        getDoc(docRef).then(doc => {
          const data = doc.data()
          const productAdapted = {
              id: doc.id, ...data
          }
          resolve(productAdapted)
        }).catch(error =>{
            reject(alertWarning('No se puedo obtener el producto'))
        })
    })
}