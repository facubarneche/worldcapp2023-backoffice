import { useOutletContext } from 'react-router-dom'
import StepFooter from 'src/components/StepFooter/StepFooter'
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
      <StepFooter />
    </>
  )
}
export default FormPlayer
