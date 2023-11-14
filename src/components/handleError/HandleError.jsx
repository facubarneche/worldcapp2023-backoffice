import './HandleError.css'

const HandleError = ({errorCode}) => {
  let errorMessage = ''

  if (errorCode >= 500) {
    errorMessage = 'Error interno del servidor.'
  } else if (errorCode >= 400) {
    errorMessage = 'Solicitud incorrecta del cliente.'
  } else {
    errorMessage = 'Error desconocido.'
  }
  
  return (
    <div className='display-error'>
      <h1>Oops... ha ocurrido un error</h1>
      <img className="display-error__image" src={`public/images/${errorCode}-error.png`} alt={`Error ${errorCode}`} />
      <h2>{errorMessage}</h2>
    </div>
  )
}

export default HandleError