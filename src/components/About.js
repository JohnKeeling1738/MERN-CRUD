import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const About = () => {
  return (
      <>
      <Box display ='flex'
      flexDirection={"column"}
      alignItems = {"center"}
      >
          <Typography variant ="h2">
              This is CRUD
          </Typography>
          <Typography variant='h3'>
              MERN STACK
          </Typography>
      </Box>
      </>
  )
}

export default About