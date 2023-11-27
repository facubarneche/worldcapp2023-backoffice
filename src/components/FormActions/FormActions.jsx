import { Button } from '@mui/material'
import './FormActions.css'

export const FormActions = ({
  leftButtonText = 'Guardar',
  leftButtonClick = () => {
    console.log('Guardar')
  },
  leftButtonProps = {},
  rightButtonText = 'Volver',
  rightButtonClick = () => {
    console.log('Volver')
  },
  rightButtonProps = {},
}) => {
  return (
    <footer className="stepFooter">
      <Button
        variant="contained"
        size="large"
        {...leftButtonProps}
        onClick={() => {
          leftButtonClick()
        }}
      >
        {leftButtonText}
      </Button>
      <Button
        size="large"
        variant="outlined"
        {...rightButtonProps}
        onClick={() => {
          rightButtonClick()
        }}
      >
        {rightButtonText}
      </Button>
    </footer>
  )
}
