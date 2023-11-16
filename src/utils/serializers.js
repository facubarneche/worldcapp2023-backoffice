export const formToJSON = (data) => {
  const formData = {}

  data.forEach((value, key) => {
    formData[key] = value
  })
  return formData
}
