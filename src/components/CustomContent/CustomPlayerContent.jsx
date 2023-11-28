import './CustomContent.css'
import '../CardBase/CardBase.css'
import { Box, CardContent, Typography } from "@mui/material"
import { SportsSoccer, Flag, Height, MonitorWeight, GpsFixed } from '@mui/icons-material'

export const CustomPlayerContent = (jugador) => {

  return (
    <CardContent className='card-content--column'>
      <Box className="card-content__section">
        <Box className="card-content__section">
          <Typography className="card-content__text">
            {jugador.fechaNacimiento}
          </Typography>
        </Box>
        <Box className="card-content__section">
          <Flag className="card-base__icons"/>
          <Typography className="card-content__text">
            {jugador.seleccion}
          </Typography>
        </Box>
      </Box>
      <Box className="card-content__section">
        <Box className="card-content__section">
          <SportsSoccer className="card-base__icons"/>
          <Typography className="card-content__text">
            {jugador.nroCamiseta}
          </Typography>
        </Box>
        <span className="card-content__text--pipe"/>
        <Box className="card-content__section">
          <Height className="card-base__icons"/>
          <Typography className="card-content__text">
            {jugador.altura}
          </Typography>
        </Box>
        <span className="card-content__text--pipe"/>
        <Box className="card-content__section">
          <MonitorWeight fontSize="large" />
          <Typography className="card-content__text">
            {jugador.peso}
          </Typography>
        </Box>
      </Box>
      <Box className="card-content__section">
        <GpsFixed className="card-base__icons"/>
        <Typography className="card-content__text">
          {jugador.posicion}
        </Typography>
      </Box>
    </CardContent>
  )
}