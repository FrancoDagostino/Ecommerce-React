import React from 'react'
import { useState } from 'react'

export const Form = ({createOrder}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const handleName = ({target})=>{
      setName(target.value)
    }

    const handleEmail = ({target})=>{
        setEmail(target.value)
    }

    const handlePhone = ({target})=>{
        setPhone(target.value)
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        const {target} = event;
        const buyer = {
            name: target.name.value,
            email: target.email.value,
            phone: target.phone.value
        }
        createOrder(buyer);
    }

  return (
    <form onSubmit={handleSubmit}>
        Nombre: <input 
            type="text" 
            name="name"
            value={name}
            onChange={handleName}  
        />
        Email: <input 
            type='email' 
            name="email"
            value={email}
            onChange={handleEmail}  
        />
        phone: <input 
            type='text' 
            name="phone"
            value={phone}
            onChange={handlePhone}  
        />
        <button type='submit'>Finalizar Compra</button>
    </form>
  )
}
