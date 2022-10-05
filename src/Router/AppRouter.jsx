import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { ItemList } from '../components/ItemList/ItemList'
import { NavBar } from '../components/NavBar/NavBar'

export const AppRouter = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/*" element={<ItemList/>}/>
        <Route path="/category/:id" element={<ItemList/>}/>
        <Route path="/details/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    </>
  )
}
