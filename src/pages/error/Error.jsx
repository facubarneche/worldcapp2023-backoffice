import { Button } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import './Error.css'

const AXIOSNOTERROR = 'No message available'

const Error = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const data = state ?? {status: 404, message: 'El recurso no ha sido encontrado'}

  //Si existe mensaje predeterminado desde el back y no es de status 500 muestra el message
  const showMessage = () => data.message && data?.message !== AXIOSNOTERROR && !is500Error()
  
  const isNetworkError = () => data.status === 0
  const is500Error = () => data.status === 500
  const is404Error = () => data.status === 404

  const printMessage = () => showMessage() ? data.message : data.errorMessage

  const printText = () => isNetworkError() ? 'Actualizar' : 'Volver'
  console.log(data.status)
  const pickImage = () => is500Error() || is404Error() ? data.status : 'unexpected'

  const returnPage = () => {
    navigate(-1)
  }

  return (
    <div className='display-error'>
      <h1>Oops... ha ocurrido un error</h1>
      <img className="display-error__image" src={`/public/images/${pickImage()}-error.png`} alt={`Error ${data.message ?? data.errorMessage}`} />
      <h2>{ printMessage() }</h2>
      <Button className="display-error__button" onClick={returnPage}>{ printText() }</Button>
    </div>
  )
}

export default Error