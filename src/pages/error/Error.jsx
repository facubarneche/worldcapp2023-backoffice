import HandleError from "src/components/handleError/HandleError"

const Error = ({error}) => {
  return (
    <>
      <HandleError errorCode={error} />
    </>
  )
}

export default Error