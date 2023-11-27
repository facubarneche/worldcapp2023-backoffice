
import { Box, Card, Typography } from '@mui/material'
import {
  DeleteForever,
  ModeEdit,
  StoreRounded,
} from '@mui/icons-material'

export const SalePointBase = ({salePoint, content}) => {
  const handleClick = () => {}

  return (
    <Card className="card-base">
      <Box className="card-base__header">
        <Box className="card-base__title">
          <StoreRounded className="card-base__icons" />
          <Typography className="card-base__text card-base__text--title">
            {salePoint.name}
          </Typography>
        </Box>
        <Box className="card-base__actions">
          <DeleteForever className="card-base__icons" />
          <ModeEdit className="card-base__icons" onClick={handleClick} />
        </Box>
      </Box>

      {content}
      <Typography className="card-base__footer card-base__text card-base__text--upper">
        Tipo: {salePoint.type} 
      </Typography>
    </Card>
  )
}
