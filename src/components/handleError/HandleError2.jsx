import './HandleError.css'
import { enqueueSnackbar } from "notistack"

const HandleError2 = ( error, navigate ) => {
  const errorData = error.response?.data ?? { status: 500 }
  let errorMessage = ''
  let navegar = false

  if (errorData.status >= 500) {
    errorMessage = 'Error interno del servidor.'
    navegar = true
  } else if (errorData.status === 404) {
    errorMessage = 'Solicitud incorrecta del cliente.'
    navegar = true
  } else if (errorData.status >= 400) {
    errorMessage = 'Mensaje tomado desde el back'
  } else {
    errorMessage = 'Error desconocido.'
  }

  if (navegar){
    navigate('/error', {state: {...errorData, errorMessage}} )
  }else{
    enqueueSnackbar(errorData.message ?? errorMessage)
  }
}

export default HandleError2