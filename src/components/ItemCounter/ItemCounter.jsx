import { useState } from 'react'

export const ItemCounter = ({onAddQuantity,initialValue=0}) => {

    const [counter, setCounter] = useState(initialValue);

    const handleAdd = ()=>{
        setCounter(counter + 1)
    }

    const handleDecrease = ()=>{
        if(counter <= 0) return;
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
