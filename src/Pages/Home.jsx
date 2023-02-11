import React , {useState} from 'react'

import { Box } from '@mui/material'
import { Exercises, Hero, Search } from '../Components'



const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  console.log(bodyPart)
  return (
    <Box className=' '>
      <Hero/>
      <Search 
        setExercises={setExercises} bodyPart={bodyPart}   setBodyPart={setBodyPart} 
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises} 
        bodyPart={bodyPart}

      />
    </Box>
  )
}

export default Home