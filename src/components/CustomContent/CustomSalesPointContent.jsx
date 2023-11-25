import { CardContent, Typography } from "@mui/material"
import { Place, AccountBox } from '@mui/icons-material'

export default function CustomSalesPointContent({ props }) {

  return (
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <Place fontSize="large" />
        {props.direccion}
      </Typography>
      <span>|</span>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <AccountBox fontSize="large" />
        {props.stock}
      </Typography>
    </CardContent>
  )
}