import './HandleError.css'

const AXIOSNOTERROR = 'No message available'
  
const HandleError = ({errorData}) => {
  let errorMessage = ''

  if (errorData.status >= 500) {
    errorMessage = 'Error interno del servidor.'
  } else if (errorData.status >= 400) {
    errorMessage = 'Solicitud incorrecta del cliente.'
  } else {
    errorMessage = 'Error desconocido.'
  }

  const showmessage = () => errorData.message && errorData?.message !== AXIOSNOTERROR
  const statusImage = (status) => status === 500 || status === 404 ? status : 'unexpected'

  return (
    <div className='display-error'>
      <h1>Oops... ha ocurrido un error</h1>
      <img className="display-error__image" src={`public/images/${statusImage(errorData.status)}-error.png`} alt={`Error ${errorData}`} />
      <h2>{showmessage() ? errorData.message : errorMessage}</h2>
    </div>
  )
}

export default HandleError