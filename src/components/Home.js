import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Button
      LinkComponent={Link} 
      to = "/books">
        <Typography>View All Products</Typography>
      </Button>

    </div>
  )
}

export default Home