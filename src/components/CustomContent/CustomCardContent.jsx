import './CustomContent.css'
import '../CardBase/CardBase.css'
import { Box, CardContent, Typography } from '@mui/material'
import { LocalFireDepartment, Tag, Print } from '@mui/icons-material'

export const CustomCardContent = (content) => {
  return (
    <CardContent className='card-content'>
      <Box className="card-content__section">
        <Tag className="card-base__icons" />
        <Typography className="card-content__text">
          {content.numero}          
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <LocalFireDepartment className="card-base__icons" sx={{color: content.onFire ? 'red' : 'grey'}}/>
        <Typography className="card-content__text" sx={{color: content.onFire ? 'red' : 'grey', textDecoration: content.onFire ? '' : 'line-through'}}>
          on fire
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <Print className="card-base__icons" />
        <Typography className="card-content__text card-content__text--title">
          {content.cantidadImpresa}
        </Typography>
      </Box>
    </CardContent>
  )
}
