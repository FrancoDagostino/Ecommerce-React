import { useState } from 'react'

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
    <div>
        <button onClick={handleAdd}>+</button>
        <h4>{counter}</h4>
        <button onClick={handleDecrease}>-</button>
        <div>
            <button onClick={() => onAddQuantity(counter)}>Agregar al carrito</button>
        </div>
    </div>
  )
}
