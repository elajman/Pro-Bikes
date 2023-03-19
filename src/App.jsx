import React from 'react'
import NavBar from './components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Contacto from './components/Contacto'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'


const App = () => {


  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={ <ItemListContainer/> }/>
          <Route exact path='/categoria/:categoria' element={ <ItemListContainer/> }/>
          <Route exact path='/contacto' element={ <Contacto />} />
          <Route exact path='/producto/:id' element={ <ItemDetailContainer/> }/>
          <Route exact path='/cart' element={ <Cart/> }/>
        </Routes>
        <Footer/>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App