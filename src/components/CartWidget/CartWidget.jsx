import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import icon from '../assets/icon-cart.svg'

export const CartWidget = () => {

  const {getTotalQuantity} = useContext(CartContext);

  return (
    <>
    <div className='header__cart--notification'>{getTotalQuantity()}</div>
        <Link to={"/cart"}>
            <img src={icon} className='header__icon' alt="" />
        </Link>
        </>
  )
}
