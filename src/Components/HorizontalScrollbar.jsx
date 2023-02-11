import React, { useContext } from 'react'

import {Box} from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <div onClick={() => scrollPrev()} className='left-arrow'>
      <FiChevronsLeft size={40} className=' text-primary'/>
    </div>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <div onClick={() => scrollNext()} className='right-arrow'>
      <FiChevronsRight size={40} className=' text-primary'/>
    </div>
  )
}
const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu className=' ' LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box 
            key={item.id || item}
            id={item.id || item}
            title={item.id || item}
            className = 'mx-6 my-0'
          >
          {isBodyParts ? 
           <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            : <ExerciseCard exercises={item} />
          }
          </Box>
            )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar