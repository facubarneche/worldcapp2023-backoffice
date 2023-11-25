import './CardBase.css'
import { Box, Card, Typography } from '@mui/material'
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
          <Typography className="card-base__text card-base__text--title">
            {cardProps.title}
          </Typography>
        </Box>
        <Box className="card-base__actions">
          <DeleteForever className="card-base__icons" />
          <ModeEdit className="card-base__icons" onClick={handleClick} />
        </Box>
      </Box>

      {customCardContent}
      <Typography className="card-base__footer card-base__text card-base__text--upper">
        {cardProps.footer}
      </Typography>
    </Card>
  )
}
