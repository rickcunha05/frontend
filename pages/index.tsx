import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/Professor'

import Lista from '../src/components/Lista/Lista'



const Home: NextPage = () => {
  const professores: Professor[] = [
   
    
  ]


  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}/>
    </Box>
  )
}

export default Home
