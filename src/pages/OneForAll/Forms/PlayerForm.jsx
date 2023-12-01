import { useOutletContext } from 'react-router-dom'
import { FormActions } from 'components/FormActions/FormActions'
import { useOnInit } from 'custom_hooks/hooks'

export const PlayerForm = ({ headerTitle }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()

  useOnInit(() => {
    setHeaderTitle(headerTitle)
  })

  return (
    <>
      <p>PlayerForm</p>
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
