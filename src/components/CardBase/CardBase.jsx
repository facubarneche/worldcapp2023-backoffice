import './CardBase.css'
import { Box, Card, CardActions, Typography } from '@mui/material'
import {
  DeleteForever,
  AssignmentIndRounded,
  ModeEdit,
} from '@mui/icons-material'

export const CardBase = ({ cardProps, customCardContent }) => {
  const handleClick = () => {}

  return (
    <Card className="card-base">
      <Box className="card-base__header">
        <Box className="card-base__title">
          <AssignmentIndRounded className="card-base__icons" />
          <Typography>{cardProps.title}</Typography>
        </Box>
        <CardActions className="card-base__actions">
          <DeleteForever className="card-base__icons" />
          <ModeEdit className="card-base__icons" onClick={handleClick} />
        </CardActions>
      </Box>

      {customCardContent}
      <Typography>{cardProps.footer}</Typography>
    </Card>
  )
}
