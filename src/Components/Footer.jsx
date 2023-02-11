import React from 'react'

import { Box, Stack } from '@mui/material'
import  logo  from '../Assets/images/Logo-1.png'


const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems= 'center' px='40px' pt='24px'  >
        <img src={logo} alt ='logo ' width='200px' height ="40px" />
        <p> Made By Yggdrasil   </p>
      </Stack>
    </Box>
  )
}

export default Footer