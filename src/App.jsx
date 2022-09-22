import { NavBar } from "./components/NavBar/NavBar";
import logo from './components/assets/logo.svg'
import menu from './components/assets/icon-menu.svg'
import icon from './components/assets/icon-cart.svg'
import avatar from './components/assets/image-avatar.png'
import  './sass/_header.scss'
import { CartWidget} from "./components/CartWidget/CartWidget";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <main className='main-container'>
      <header className='header'>
        <div className='header__navigation'>
        <img src={menu} className='header__menu' alt="menu" />
        <img src={logo} className='header__logo' alt="logo" />
        <NavBar/>
        </div>

      <div className='header__cart-avatar'>
            <div className='header__cart'>
            <CartWidget/>
            </div>
            <img src={avatar} className='header__avatar' alt="" />
        </div>
      </header>
      <ItemListContainer mensaje={"Bienvenidos :D"}/>
    </main>
  );
}

export default App;
