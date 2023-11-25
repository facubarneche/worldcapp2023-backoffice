import { Button } from '@mui/material'
import './StepFooter.css'

const StepFooter = ({
  leftButton = {
    text: 'Guardar',
    function: () => {
      console.log('Guardar')
    },
  },
  rightButton = {
    text: 'Volver',
    function: () => {
      console.log('Volver')
    },
  },
  leftButtonProps = {},
  rightButtonProps = {},
}) => {
  return (
    <footer className="stepFooter">
      <Button
        onClick={() => {
          leftButton.function()
        }}
        {...leftButtonProps}
        variant="contained"
        size="large"
      >
        {leftButton.text ?? 'Guardar'}
      </Button>
      <Button
        onClick={() => {
          rightButton.function()
        }}
        {...rightButtonProps}
        variant="outlined"
        size="large"
      >
        {rightButton.text ?? 'Volver'}
      </Button>
    </footer>
  )
}
export default StepFooter
