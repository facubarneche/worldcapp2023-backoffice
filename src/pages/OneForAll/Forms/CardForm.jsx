import { useNavigate } from 'react-router-dom'
import { FormActions } from 'components/FormActions/FormActions'

export const CardForm = () => {
  const navigate = useNavigate()

  const handleClickConfirm = () => {}

  return (
    <>
      <FormActions
        handleLeftButtonClick={handleClickConfirm}
        handleRightButtonClick={() => {
          navigate('/puntos-de-venta')
        }}
      />
    </>
  )
}
