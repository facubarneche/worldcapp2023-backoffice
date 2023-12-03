import { useNavigate, useOutletContext } from 'react-router-dom'
import { FormActions } from 'components/FormActions/FormActions'
import { useOnInit } from 'custom_hooks/hooks'

export const CardForm = ({ headerTitle }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const navigate = useNavigate()

  useOnInit(() => {
    setHeaderTitle(headerTitle)
  })

  const handleClickConfirm = () => {

  }

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