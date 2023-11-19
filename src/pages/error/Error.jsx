import { Button } from "@mui/material"
import { useLocation } from "react-router-dom"
import './Error.css'

const AXIOSNOTERROR = 'No message available'

const Error = () => {
  const { state } = useLocation()
  const data = state ?? {status: 404, message: 'El recurso no ha sido encontrado'}

  //Si existe mensaje predeterminado desde el back y no es de status 500 muestra el message
  const showMessage = () => data.message && data?.message !== AXIOSNOTERROR && !is500Error()
  
  const isNetworkError = () => data.status === 0
  const is500Error = () => data.status === 500
  const is400Error = () => data.status === 400

  const printMessage = () => showMessage() ? data.message : data.errorMessage

  const printText = () => isNetworkError() ? 'Actualizar' : 'Volver'

  const pickImage = () => is500Error() || is400Error() ? data.status : 'unexpected'

  return (
    <div className='display-error'>
      <h1>Oops... ha ocurrido un error</h1>
      <img className="display-error__image" src={`public/images/${pickImage()}-error.png`} alt={`Error ${data.message ?? data.errorMessage}`} />
      <h2>{ printMessage() }</h2>
      <Button className="display-error__button">{ printText() }</Button>
    </div>
  )
}

export default Error