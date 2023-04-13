import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartContext from './context/CartContext'
import Contacto from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <CartContext>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path= '/' element = {<ItemListContainer/>}/>
    <Route exact path= '/Contact' element = {<Contacto/>}/>
    <Route exact path= '/category/:category' element = {<ItemListContainer/>}/>
    <Route path="/oferta/:oferta" element= {<ItemListContainer/>} />
    <Route exact path= '/itemdetail/:id' element = {<ItemDetailContainer/>}/>
    <Route exact path= '/cart' element = {<Cart/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </CartContext>
  )
}

export default App
