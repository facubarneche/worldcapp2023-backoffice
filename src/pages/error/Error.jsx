import { useLocation } from "react-router-dom"

const AXIOSNOTERROR = 'No message available'

const Error = () => {
  const { state } = useLocation()
  console.log(state)
  const showMessage = () => state.message && state?.message !== AXIOSNOTERROR
  const statusImage = (status) => status === 500 || status === 404 ? status : 'unexpected'

  return (
    <div className='display-error'>
      <h1>Oops... ha ocurrido un error</h1>
      <img className="display-error__image" src={`public/images/${statusImage(state.status)}-error.png`} alt={`Error ${state.message ?? state.errorMessage}`} />
      <h2>{showMessage() ? state.message : state.errorMessage}</h2>
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