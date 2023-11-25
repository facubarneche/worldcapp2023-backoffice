import { CardContent, Typography } from "@mui/material"
import { SportsSoccer, Flag, Height, MonitorWeight, GpsFixed } from '@mui/icons-material'

export default function CustomPlayerContent({ props }) {

  return (
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.anioDebut}
      </Typography>
      <span>|</span>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <SportsSoccer fontSize="large" />
        {props.nroCamiseta}
      </Typography>
      <span>|</span>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <Flag fontSize="large" />
        {props.seleccion}
      </Typography>
      <span>|</span>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <GpsFixed fontSize="large" />
        {props.posicion}
      </Typography>
      <span>|</span>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <Height fontSize="large" />
        {props.altura}
      </Typography>
      <span>|</span>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <MonitorWeight fontSize="large" />
        {props.peso}
      </Typography>
    </CardContent>
  )
}