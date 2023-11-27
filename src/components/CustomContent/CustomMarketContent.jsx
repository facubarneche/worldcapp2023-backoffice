import { Box, CardContent, Typography } from "@mui/material"
import { Place, AccountBox } from '@mui/icons-material'
import './CustomContent.css'
import '../CardBase/CardBase.css'

export const CustomMarketContent = (content) => {
  return (
    <CardContent className='card-content card-content--column'>
      <Box className="card-content__section">
        <Place className="card-base__icons" />
        <Typography className="card-content__text">
          {content.direccion}
        </Typography>
      </Box>      
      <Box className="card-content__section">
        <AccountBox className="card-base__icons" />
        <Typography className="card-content__text">
          {content.stock}
        </Typography>
      </Box>
    </CardContent>
  )
}