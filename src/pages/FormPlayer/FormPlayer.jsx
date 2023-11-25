import { useOutletContext } from 'react-router-dom'
import FormActions from 'src/components/FormActions/FormActions'
import { useOnInit } from 'src/customHooks/hooks'
import './FormPlayer.css'

const FormPlayer = ({ headerTitle }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()

  useOnInit(() => {
    setHeaderTitle(headerTitle)
  })

  return (
    <main className="formPlayer">
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
    </main>
  )
}
export default FormPlayer
