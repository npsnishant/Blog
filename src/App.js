import React from 'react'
import Header from './components/Header'
import Home from './components/Home/Home'
import {Box} from '@mui/material'

const App = () => {
  return (
    <div>
      <Header />
      <Box style={{marginTop: 64}}>
        <Home />
      </Box>
    </div>
  )
}

export default App
