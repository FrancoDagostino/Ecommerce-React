import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Cart } from '../components/Cart/Cart'
import { Checkout } from '../components/Checkout/Checkout'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { ItemList } from '../components/ItemList/ItemList'
import { NavBar } from '../components/NavBar/NavBar'

export const AppRouter = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/*" element={<ItemList/>}/>
        <Route path="/category/:categoryId" element={<ItemList/>}/>
        <Route path="/details/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    </>
  )
}
