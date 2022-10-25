import { useState } from 'react'
import  './ItemCounter.scss'
export const ItemCounter = ({onAddQuantity,initialValue=1,stock}) => {

    const [counter, setCounter] = useState(initialValue);

    const handleAdd = ()=>{
        if(counter >= stock) return
        setCounter(counter + 1)
    }

    const handleDecrease = ()=>{
        if(counter <= 1) return;
        setCounter(counter - 1)
    }


  return (
    <>
    <div className="itemCounterContainer">

        <button onClick={handleAdd}>+</button>

        <input type="text" value={counter} disabled="false" />
        <button onClick={handleDecrease}>-</button>
    </div>
        <div>
            <button className='btnSucess' onClick={() => onAddQuantity(counter)}>Agregar al carrito</button>
        </div>
    </>
  )
}
