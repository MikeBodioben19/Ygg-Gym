import React from 'react'

import { Box, Stack} from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name}) => {

  console.log(exerciseVideos) 
  if(!exerciseVideos.length) return 'Loading...'

  return (

    <Box sx={{ marginTop: {lg : '200px', xs: '20px'}}} p='20px' >
      <p className= 'text-2xl mb-12'>
        Watch <span className='capitalize font-bold' style={{ color: '#ff2625'}}> {name} </span> exercise Videos
      </p>
      <Stack className="flex justify-content-start items-center "
        sx= {{
          flexDirection: {lg : 'row'},
          gap: {lg : '110px', xs: '0'}
        }}  
      >
        {exerciseVideos?.slice(0,4).map((item,index) => (
          <a key={index} className = 'exercise-video flex flex-col items-center' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'  >
            <img src={item.video.thumbnails[0].url} className='w-full h-full' alt={item.video.title} />
            <p className = 'text-2xl mt-4 whitespace'>
              {item.video.title}
            </p>

            <p className = 'text-xl text-red-400 my-2'>
              {item.video.channelName}
            </p>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos