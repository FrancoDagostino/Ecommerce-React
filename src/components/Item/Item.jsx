import React from 'react'
import { NavLink } from 'react-router-dom'
import './_Item.scss'
export const Item = ({_id,img,precio,nombre}) => {
  return (
    <>

        {
            <div key={_id}>
                    <div className="product">
                            <img src={img} alt="" width="280px" height="280px" />
                            <div className="product__info">
                                <span className="product__send">Envío con normalidad</span>
                                <span className="product__price">$ {precio}</span>
                                <span className="product__costo">Envío gratis</span>
                                <span className="product__description">{nombre}</span>
                                <div className="product__assessment">
                                    <span>Estrellas</span>
                                    <span>1919</span>
                                </div>
                                <NavLink to={`/details/${_id}`}>

                                    Detalle
                                </NavLink>
                        </div>
                    </div>
                </div>
        }
        </>

  )
}
