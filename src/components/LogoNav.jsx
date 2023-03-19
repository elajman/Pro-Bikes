import React from 'react'
import { Link } from 'react-router-dom'

const LogoNav = () => {
  return (
    <div className='logonavbar'>
        <Link to={"/"}> 
          <img src="https://images-platform.99static.com//eURYz52nOwUmEfPTbW-T1lJYFRk=/493x0:1274x781/fit-in/500x500/99designs-contests-attachments/35/35499/attachment_35499555" alt="logo"  />
        </Link>
    </div>
  )
}

export default LogoNav
