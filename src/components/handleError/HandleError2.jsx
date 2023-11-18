import './HandleError.css'
import { enqueueSnackbar } from "notistack"

const HandleError2 = ( error, navigate ) => {
  const errorData = error.response?.data ?? { status: 500 }
  let errorMessage = ''
  let navegar = false

  if (errorData.status >= 500) {
    errorMessage = 'Hubo un error al realizar la operación. Consulte al administrador del sistema.'
    navegar = true
  } else if (errorData.status === 404) {
    errorMessage = 'No se ha encontrado el recurso solicitado.'
    navegar = true
  } else if (errorData.status >= 400) {
    errorMessage = 'Se ha producido un error en la solicitud. \n Por favor, verifique los datos y vuelva a intentarlo.'
  } else {
    errorMessage = 'Error desconocido.'
  }

  if (navegar && navigate){
    navigate('/error', {state: {...errorData, errorMessage}} )
  }else{
    enqueueSnackbar(errorData.message ?? errorMessage)
  }
}

export default HandleError2