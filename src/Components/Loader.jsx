import React from 'react'


import {Stack} from '@mui/material'
import {InfinitySpin} from 'react-loader-spinner'

const Loader = () => {
    return(
        <Stack direction= "row" className="flex justify-content-center items-center w-full">
            <InfinitySpin color="gray"/> 
        </Stack>
    )
}

export default Loader