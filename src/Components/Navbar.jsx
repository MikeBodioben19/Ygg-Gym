import React from 'react'

import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../Assets/images/Logo.png' 

const Navbar = () => {
  return (
    <Stack
      direction = 'row'
      justifyContent = "space-around" 
      sx = {{gap : {sm :'122px' , xs : '40px'},mt : {sm : '32px', xs : '20'}, justifyContent : 'none'}} px="20px"
    >
        <Link to = "/">
            <img src={Logo} alt="logo" className='w-[48px] h-[48px] mx-8 ' />
        </Link>
        <Stack
          direction = "row"
          gap = "40px"
          fontSize = "24px"
          alignItems= "flex-end"
        >
            <Link to="/" className='border-b-4 border-b-primary text-darkPrime '>
                Home
            </Link>
            <a href="#exercises" className='text-darkPrime ' >
              Exercises
            </a>
        </Stack>
    </Stack>
  )
}

export default Navbar