import { CartWidget } from '../CartWidget/CartWidget'
import  './_navbar.scss'
import menu from '../assets/icon-menu.svg'
import avatar from '../assets/image-avatar.png'
import { NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <>
        <header className='header'>
        <div className='header__navigation'>
        <img src={menu} className='header__menu' alt="menu" />
        <nav className='navbar'>
            <ul className='navbar__items'>
                <li className="navbar__link"><NavLink to="/">Inicio</NavLink></li>
                <li className="navbar__link"><NavLink to="/category/placa_madre">Mother</NavLink></li>
                <li className="navbar__link"><NavLink to="/category/memoria_ram">RAM</NavLink></li>
                <li className="navbar__link"><NavLink to="/category/Video Card">Tarjeta Gráfica</NavLink></li>
            </ul>

        </nav>
        </div>

      <div className='header__cart-avatar'>
            <div className='header__cart'>
            <CartWidget/>
            </div>
            <img src={avatar} className='header__avatar' alt="" />
        </div>
      </header>
    </>
  )
}
