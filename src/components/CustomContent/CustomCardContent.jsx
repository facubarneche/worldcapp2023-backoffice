import { Box, CardContent, Typography } from '@mui/material'
import { LocalFireDepartment, Tag, Print } from '@mui/icons-material'
import './CustomContent.css'
import '../CardBase/CardBase.css'

export default function CustomCardContent(card) {

  return (
    <CardContent className='card-content'>
      <Box className="card-content__section">
        <Tag className="card-base__icons" />
        <Typography className="card-content__text">
          {card.numero}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <LocalFireDepartment className="card-base__icons" sx={{color: card.onFire ? 'red' : 'grey'}}/>
        <Typography className="card-content__text" sx={{color: card.onFire ? 'red' : 'grey', textDecoration: card.onFire ? '' : 'line-through'}}>
          {card.onFire ? "on fire" : "on fire"}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <Print className="card-base__icons" />
        <Typography className="card-content__text">
          {card.nivelImpresion}
        </Typography>
      </Box>
    </CardContent>
  )
}
