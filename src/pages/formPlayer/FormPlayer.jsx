import { useOutletContext } from 'react-router-dom'
import FormActions from 'src/components/FormActions/FormActions'
import { useOnInit } from 'src/customHooks/hooks'

const FormPlayer = ({ headerTitle }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()

  useOnInit(() => {
    setHeaderTitle(headerTitle)
  })

  return (
    <>
      <p>FormPlayer</p>
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
export default FormPlayer
