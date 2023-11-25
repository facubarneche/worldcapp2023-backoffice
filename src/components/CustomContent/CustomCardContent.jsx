import { Box, CardContent, Typography } from '@mui/material'
import { LocalFireDepartment, Tag, Print } from '@mui/icons-material'
import './CustomContent.css'
import '../CardBase/CardBase.css'

export default function CustomCardContent({ numero, onFire, nivelImpresion }) {

  return (
    <CardContent className='card-content'>
      <Box className="card-content__section">
        <Tag className="card-base__icons" />
        <Typography className="card-content__text">
          {numero}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <LocalFireDepartment className="card-base__icons" />
        <Typography className="card-content__text">
          {onFire}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <Print className="card-base__icons" />
        <Typography className="card-content__text">
          {nivelImpresion}
        </Typography>
      </Box>
    </CardContent>
  )
}
