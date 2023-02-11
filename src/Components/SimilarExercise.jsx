import React from 'react'

import { Box, Stack} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercise = ({ targetMuscleExercises ,equipmentExercises}) => {

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0', position :'relative', width : '100%', p:'20px'}}}  >
      <p className='text-3xl mb-5'>
        Exercises that target the same muscle group
      </p>

      <Box  direction= 'row' sx={{ p: '2', position: 'relative', width : '100%', p:'20px'}}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar  data= {targetMuscleExercises} />
          : <Loader/>
         }
      </Box>

      <p className='text-3xl mb-5'>
        Exercises that use the same equipment
      </p>

      <Box direction= 'row' sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ?
          <HorizontalScrollbar data= {equipmentExercises} />
          : <Loader/>
         }
      </Box>
    </Box>
  )
}

export default SimilarExercise