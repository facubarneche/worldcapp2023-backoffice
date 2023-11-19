import { enqueueSnackbar } from "notistack"

const HandleError = ( error, navigate ) => {
  const errorData = error.response?.data ?? { status: 0 }
  let errorMessage = ''
  let navegar = false

  if (errorData.status >= 500) {
    errorMessage = 'Hubo un error al realizar la operación. Consulte al administrador del sistema.'
    navegar = true
  } else if (errorData.status === 404) {
    errorMessage = 'No se ha encontrado el recurso solicitado.'
    navegar = true
  } else if (errorData.status >= 400) {
    errorMessage = 'Se ha producido un error en la solicitud. Por favor, verifique los datos y vuelva a intentarlo.'
  } else if (errorData.status === 0) {
    errorMessage = 'El servidor se encuentra sin conexión.'
    navegar = true
  } else {
    errorMessage = 'Error desconocido.'
  }

  if (navegar && navigate){
    navigate('/error', {state: {...errorData, errorMessage}} )
  }else{
    enqueueSnackbar(errorData.message ?? errorMessage)
  }
}

export default HandleError