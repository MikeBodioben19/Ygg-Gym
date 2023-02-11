import React from 'react'

import { Box , Button} from '@mui/material'

import banner from '../Assets/images/banner.png'

const Hero = () => {
   
  return (
    <Box
      sx = {{
        mt : { lg: '212px', xs : '70px'},
        ml : { sm : '50px'}
      }}
      className = "relative p-6" 
    >
        <p className='text-primary font-bold text-2xl '>
            Fitness Club 
        </p>
        <p className='font-bold text-4xl mt-6 mb-7 ss:text-5xl'>
          Sweat, Smile <br/> and Repeat
        </p>
        <p className='text-xl my-5'>
          Check out the most effective exercises 
        </p>
        <Button variant = 'contained' href = "#exercises" style={{backgroundColor : "#ff2625"}} className='bg-primary'>
          Explore Exercises
        </Button>
        <p className='font-medium opacity-10 text-primary text-[200px] hidden md:block'>
          Exercises
        </p>
        <img src={banner} alt="banner" className=' hidden md:block absolute right-[40px] top-0 w-[700px] h-[900px] -mt-[330px] ' />
    </Box>
  )
}

export default Hero