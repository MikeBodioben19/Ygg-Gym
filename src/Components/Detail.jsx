import React from 'react'

import { Stack, Button } from '@mui/material'

import BodyPartImage from '../Assets/icons/body-part.png'
import TargetImage from '../Assets/icons/target.png'
import EquipmentImage from '../Assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
  
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },

    {
      icon: TargetImage,
      name: target,
    },
    
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ]

  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
        
        <Stack sx={{ gap : {lg: '35px', xs: '20px'}}}>
          <p className='text-3xl capitalize font-bold'>
            {name}
          </p>

          <p className='text-xl '>
            Exercises keep you strong. {name} {` `}
            is one of th best
            exercises to target your {target} . It wil help your mood and gain energy.
          </p>

          {extraDetail.map((item, index) => (
            <Stack key = {index} direction= "row"  gap= "24px" alignItems= "center"> 
                <Button sx={{ backgroundColor : "#fff2db", borderRadius: '50%', width: '100px', height: '100px'}}>
                  <img src={item.icon} alt={bodyPart} style={{ width : '50px', height: '50px'}} />
                </Button>
                <p className='text-xl '>{item.name}</p>
            </Stack>
          ))}
        </Stack>

    </Stack>
  )
}

export default Detail