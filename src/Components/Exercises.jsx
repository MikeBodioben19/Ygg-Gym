import React ,{useState, useEffect} from 'react'

import { Pagination } from '@mui/material/'
import { Box, Stack } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({ exercises,setExercises, bodyPart }) => {
  console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 10

  const indexOfLastExercise = currentPage* exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value) ;
    window.scrollTo({ top : 2200, behavior :"smooth"})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if(bodyPart === 'all'){
        exercisesData = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      } else {
        exercisesData = await fetchData( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart} `,exerciseOptions)
      }
      setExercises (exercisesData)
    }
    fetchExercisesData ()
  }, [bodyPart])
  
  return (
    <Box id="exercises " sx={{mt: {lg : '110px'}}} className='mt-12 p-5'>
      <p className=' text-3xl mb-12'> Showing Results</p>
      <Stack direction = 'row' sx={{gap : {lg : '110px', xs : "50px"}}}
        className='flex-wrap justify-center'
      >
        {currentExercises.map((exercises, index) => (
          <ExerciseCard key={index} exercises={exercises}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems ="center">
          {exercises.length > 9 && (
            <Pagination
              color ="standard"
              shape ="rounded"
              defaultPage={1}
              count = {Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange ={paginate}
              size ="large"
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises