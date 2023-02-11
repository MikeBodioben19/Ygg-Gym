import React from 'react'

import { Stack } from '@mui/material'
import Icon from '../Assets/icons/gym.png'


const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className= "bodyPart-card border-t"
      sx={{
        borderTop :  bodyPart === item ? '10px solid #ff2625' : '',
        backgroundColor : '#fff',
        borderBottomLeftRadius : '20px',
        width : '270px',
        height : '280px',
        cursor : 'pointer',
        gap :'47px',
      }}
      onClick = {() => {
        setBodyPart(item)
        window.scrollTo({top: 1800, left:100, behavior: 'smooth'})
      }}
    >
      <img src={Icon} alt="dumbbell" className='w-[40px] h-[40px] ' />
      <p className='text-xl font-bold text capitalize'>
        {item}
      </p>
    </Stack>
  )
}

export default BodyPart