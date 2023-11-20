import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material"
import './SalesPointForm.css'

const SalesPointForm = () => {
  const tiposPuntosDeVenta = ['Kiosko', 'Verduleria', 'Fafaleria']
  return (
    <div className="sales-point-form">
      <TextField className="sales-point-form__input"
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
      <TextField className="sales-point-form__input"
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField className="sales-point-form__input"
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="Kiosko"
        helperText="Please select your currency"
        SelectProps={{
          native: true,
        }}
      >
        {tiposPuntosDeVenta.map((option) =>
          <option key={option} value={option}>
            {option}
          </option>
        )}
      </TextField>

      <FormControlLabel control={<Checkbox defaultChecked />} label="On Fire" />
      <div className="sales-point-form__button">
        <Button variant="contained">Guardar</Button>
        <Button variant="outlined">Volver</Button>
      </div>
    </div>
  )
}

export default SalesPointForm