import { Button } from '@mui/material'
import './FormActions.css'

export const FormActions = ({
  leftButtonText = 'Confirmar',
  rightButtonText = 'Cancelar',  
  leftButtonProps = {},
  rightButtonProps = {},
  handleLeftButtonClick = () =>{},
  handleRightButtonClick = () => {},  
}) => { 

  return (
    <footer className="step-footer">
      <Button
        variant="contained"
        size="large"
        {...leftButtonProps}
        onClick={handleLeftButtonClick}
      >
        {leftButtonText}
      </Button>
      <Button
        size="large"
        variant="outlined"
        {...rightButtonProps}
        onClick={handleRightButtonClick}
      >
        {rightButtonText}
      </Button>
    </footer>
  )
}
