import { CardContent, Typography } from '@mui/material'
import { LocalFireDepartment, Tag, Print } from '@mui/icons-material'

export default function CustomCardContent({ numero, onFire, nivelImpresion }) {
  return (
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <Tag fontSize="large" />
        {numero}
      </Typography>
      <span>|</span>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <LocalFireDepartment fontSize="large" color="error" />
        {onFire}
      </Typography>
      <span>|</span>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <Print fontSize="large" />
        {nivelImpresion}
      </Typography>
    </CardContent>
  )
}
