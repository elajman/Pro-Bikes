import React from 'react'
import CartWidget from './CartWidget'
import LogoNav from './LogoNav'
import { Flex, Box, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
         <div className='navegacion'>
      <Flex>
      <LogoNav />  
        <Link to={"/ItemDetailContainer"}>
        <Button colorScheme='blue'>Quienes Somos</Button>  
        </Link>
        <Link to={"/contacto"}>
        <Button colorScheme='blue'>Contacto</Button>
        </Link>
        <Link to={"/"}>
         <Button colorScheme='blue'>Inicio</Button> 
        </Link>
        
        <Menu>
            <MenuButton as={Button}>Productos</MenuButton>
            <MenuList>
                <Link to={'/categoria/Hard Tail'}><MenuItem>Specialized</MenuItem></Link>
                <Link to={`/categoria/Full Suspension`}><MenuItem>Trek</MenuItem></Link>
                <Link to={`/categoria/Full Suspension`}><MenuItem>Scott</MenuItem></Link>
                <Link to={`/categoria/Full Suspension`}><MenuItem>Cannondale</MenuItem></Link>
                <Link to={`/categoria/Full Suspension`}><MenuItem>BMC</MenuItem></Link>  
            </MenuList>
        </Menu>
        <Box>
            <CartWidget />
        </Box>
     </Flex>
    </div>
   
    )
}

export default NavBar
