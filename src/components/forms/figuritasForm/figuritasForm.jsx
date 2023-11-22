import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"

import './figuritasForm.css'

const FiguritasForm = ({ changeDisplay }) => {
  const jugadores = ['Batigol', 'Messi', 'Simeone', 'Aimar', 'Michael Owen', 'Kamabinga (el 3 de francia)', 'Enzo Franchescolli', 'La Bruja Berti']
  const printLevel = ['Baja', 'Media', 'Alta']

  return (
    <div className="figuritas-form">
      <TextField required label="Nro" type="number" />

      <TextField className="figuritas-form__select"
        required
        label="Jugador"
        defaultValue="default"
        select
        SelectProps={{ native: true }}
      >
        {
          jugadores.map((option) =>
            <option key={option} value={option}>
              {option}
            </option>
          )
        }
      </TextField>

      <FormControlLabel className="figuritas-form__checkbox" control={<Checkbox defaultChecked={true} />} label="On Fire" />

      <TextField className="figuritas-form__select"
        required
        label="Nivel de impresión"
        defaultValue="default"
        select
        SelectProps={{ native: true }}
      >
        {
          printLevel.map((option) =>
            <option key={option} value={option}>
              {option}
            </option>
          )
        }
      </TextField>

      <TextField className="figuritas-form__input" required label="Imagen" type="text" />

      <strong>Valoración base {600}</strong>
      <strong>Valoración total {1000}</strong>

      <Button variant="contained" onClick={changeDisplay}>Guardar</Button>
      <Button variant="outlined" onClick={changeDisplay}>Volver</Button>
    </div>
  )
}

export default FiguritasForm


