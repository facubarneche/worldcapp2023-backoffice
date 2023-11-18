import { Button } from "@mui/material"
import { useLocation } from "react-router-dom"

const AXIOSNOTERROR = 'No message available'

const Error = () => {
  const { state } = useLocation()
  const data = state ?? {status: 404, message: 'El recurso no ha sido encontrado'}
  const showMessage = () => data.message && data?.message !== AXIOSNOTERROR
  const statusImage = (status) => status === 500 || status === 404 ? status : 'unexpected'
  console.log(data.status)
  return (
    <div className='display-error'>
      <h1>Oops... ha ocurrido un error</h1>
      <img className="display-error__image" src={`public/images/${statusImage(data.status)}-error.png`} alt={`Error ${data.message ?? data.errorMessage}`} />
      <h2>{showMessage() ? data.message : data.errorMessage}</h2>
      <Button>lala</Button>
    </div>
  )
}

export default Error


// import { useLocation } from "react-router-dom"
// import HandleError from "src/components/handleError/HandleError"

// const Error = () => {
//   const { state } = useLocation()
//   return (
//     <>
//       <HandleError errorData={state?.errorData ?? { status: 404 }} />
//     </>
//   )
// }

// export default Error