import { useLocation } from "react-router-dom"
import HandleError from "src/components/handleError/HandleError"

const Error = () => {
  const { state } = useLocation()
  return (
    <>
      <HandleError errorData={state?.errorData ?? { status: 404 }} />
    </>
  )
}

export default Error