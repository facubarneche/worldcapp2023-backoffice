import { useOutletContext } from 'react-router-dom'
import FormActions from 'src/components/FormActions/FormActions'
import { useOnInit } from 'src/customHooks/hooks'
import './FormPlayer.css'
import { TextField, Typography } from '@mui/material'
import { useState } from 'react'

const FormPlayer = ({ headerTitle }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [playerData, setPlayerData] = useState({})

  useOnInit(() => {
    setHeaderTitle(headerTitle)
  })

  const handleChange = (e, key) => {
    const value = e.target.value
    setPlayerData((prev) => ({ ...prev, [key]: value }))
    console.log(playerData)
  }

  const inputData = [
    {
      label: 'Nombre',
      inputElement: <TextField onChange={(e) => handleChange(e, 'nombre')} />,
    },
    {
      label: 'Apellido',
      inputElement: <TextField onChange={(e) => handleChange(e, 'apellido')} />,
    },
  ]

  return (
    <main className="formPlayer formPlayer__flexContainer">
      <form className="formPlayer__form">
        {inputData.map((data, index) => (
          <section
            className="formPlayer__input-container formPlayer__flexContainer"
            key={data.label + index}
          >
            <Typography component="label" variant="h5">
              {data.label}
            </Typography>
            {data.inputElement}
          </section>
        ))}
      </form>
      <FormActions />
    </main>
  )
}
export default FormPlayer
