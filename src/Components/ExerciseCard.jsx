import React from 'react'

import { Button, Stack } from '@mui/material'
import {Link} from 'react-router-dom'

const ExerciseCard = ({ exercises }) => {

  return (
    <Link className='exercise_card border-t-2  border-red-600 scale-100 transition-all duration-300 hover:scale-110' to={`/exercise/${exercises.id}`}>
        <img src={exercises.gifUrl} alt={exercises.name} Loading='lazy'/>
        <Stack direction="row">
          <Button sx={{ml : '21px', color : "#fff", background : "#ffa9a9", fontSize: '14px', borderRadius : '20px', textTransform :'capitalize'}}>
            {exercises.bodyPart}
          </Button>
          <Button sx={{ml : '21px', color : "#fff", background : "#fcc757", fontSize: '14px', borderRadius : '20px', textTransform :'capitalize'}}>
            {exercises.target}
          </Button>
        </Stack>

          <p className=' ml-5 text-lg  font-bold text-black mt-3 pb-3 capitalize'>
            {exercises.name}
          </p>

    </Link>
  )
}

export default ExerciseCard