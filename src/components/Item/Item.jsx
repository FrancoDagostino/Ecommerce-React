import React from 'react'
import { NavLink } from 'react-router-dom'
import './_Item.scss'
export const Item = ({id,img,price,name,stock}) => {
  return (
    <>

        {
            stock === 0 ? ''
            :
            <div key={id}>
                    <div className="product">
                            <img src={img} alt={name} width="280px" height="280px" />
                            <div className="product__info">
                                <span className="product__send">Envío con normalidad</span>
                                <span className="product__price">$ {price}</span>
                                <span className="product__costo">Envío gratis</span>
                                <span className="product__description">{name}</span>
                                <div className="product__assessment">
                                    <span>Estrellas</span>
                                    <span>1919</span>
                                </div>
                                <NavLink to={`/details/${id}`}>

                                    Detalle
                                </NavLink>
                        </div>
                    </div>
                </div>
        }
        </>

  )
}
