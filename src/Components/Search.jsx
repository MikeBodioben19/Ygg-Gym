import React , {useState , useEffect} from 'react'

import { Box , TextField , Stack , Button} from '@mui/material'
import {exerciseOptions , fetchData } from '../Utils/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar'

const Search = ({setExercises, bodyPart, setBodyPart}) => {
  
  const [search, setSearch] = useState('')

  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
      const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      
        setBodyParts(['all', ...bodyPartsData])
      }
      fetchExercisesData()
  }, [])
  

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises',exerciseOptions) 
        console.log(exerciseData);
        
      const searchedExercises = exerciseData.filter (
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      
          setSearch('')
          setExercises(searchedExercises)

    }
  }
  return (
    <Stack className='items-center justify-center mt-6  '>
      <p className='font-bold text-4xl ss:text-5xl mb-12 text-center '>
        Awesome Exercises You <br/> Should Know
      </p>

      <Box position = "relative" mb = "72px">
        <TextField
          sx = {{
            input : {
              fontWeight : '700',
              border : 'none',
              borderRadius : '4px'
            },
            width : {lg : '800px' , xs : '350px'},
            backgroundColor : '#fff',
            borderRadius : '40px'
          }}
          height = "76px"
          value = {search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder = "Search Exercises"
          type = "text"
        >
        </TextField>
        <Button
          sx= {{
            bgcolor : '#ff2625',
            color : '#fff',
            textTransform : 'none',
            width : {lg : '175px', xs : '80px'},
            fontSize : {lg : '20px' , xs : '14px'},
            height : '56px',
            position : 'absolute',
            right : '0'
          }}
          onClick = {handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position :'relative', width : '100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default Search