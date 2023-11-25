import { Box, CardContent, Typography } from "@mui/material"
import { SportsSoccer, Flag, Height, MonitorWeight, GpsFixed } from '@mui/icons-material'
import './CustomContent.css'
import '../CardBase/CardBase.css'

export default function CustomPlayerContent({ anioDebut, nroCamiseta, seleccion, posicion, altura, peso }) {

  return (
    <CardContent className='card-content'>
      <Box className="card-content__section">
        <Typography className="card-content__text">
          {anioDebut}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <SportsSoccer className="card-base__icons"/>
        <Typography className="card-content__text">
          {nroCamiseta}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <Flag className="card-base__icons"/>
        <Typography className="card-content__text">
          {seleccion}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <GpsFixed className="card-base__icons"/>
        <Typography className="card-content__text">
          {posicion}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <Height className="card-base__icons"/>
        <Typography className="card-content__text">
          {altura}
        </Typography>
      </Box>
      <span className="card-content__text--pipe"/>
      <Box className="card-content__section">
        <Typography className="card-content__text">
          <MonitorWeight fontSize="large" />
          {peso}
        </Typography>
      </Box>
    </CardContent>
  )
}