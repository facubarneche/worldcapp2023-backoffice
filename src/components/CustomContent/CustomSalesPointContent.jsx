import { Box, CardContent, Typography } from "@mui/material"
import { Place, AccountBox } from '@mui/icons-material'
import './CustomContent.css'
import '../CardBase/CardBase.css'

export default function CustomSalesPointContent(puntoVenta) {

  return (
    <CardContent className='card-content'>
      <Box className="card-content__section">
        <Place className="card-base__icons" />
        <Typography className="card-content__text">
          {`${puntoVenta.streetName} ${puntoVenta.streetNumber}`}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <AccountBox className="card-base__icons" />
        <Typography className="card-content__text">
          {puntoVenta.envelopeStock}
        </Typography>
      </Box>
    </CardContent>
  )
}