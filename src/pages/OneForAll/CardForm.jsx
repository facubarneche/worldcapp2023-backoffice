import { useOutletContext } from 'react-router-dom'
import { FormActions } from 'components/FormActions/FormActions'
import { useOnInit } from 'customHooks/hooks'

export const CardForm = ({ headerTitle }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()

  useOnInit(() => {
    setHeaderTitle(headerTitle)
  })

  return (
    <>
      <p>CardForm</p>
      <FormActions
        leftButtonClick={() => {
          console.log('jijia')
        }}
        rightButtonText="Cancelar"
        rightButtonProps={{
          className: 'ButtonLolazo',
          variant: 'contained',
          disabled: true,
        }}
      />
    </>
  )
}