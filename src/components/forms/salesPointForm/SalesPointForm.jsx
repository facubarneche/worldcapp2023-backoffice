import { Checkbox, FormControlLabel, TextField } from "@mui/material"
import './SalesPointForm.css'

const SalesPointForm = () => {
  const lala = ['lala1', 'lala2']

  return (
    <div className="sales-point-form">
      <FormControlLabel control={<Checkbox defaultChecked={true} />} label="label" />
      <TextField
        required
        label="label"
        type="text"
        defaultValue="default"
      >
      </TextField>

      <TextField
        required
        label="label"
        type="text"
        defaultValue="default"
        select
        SelectProps={{ native: true }}
      >
        {
          lala.map((option) =>
            <option key={option} value={option}>
              {option}
            </option>
          )
        }
      </TextField>
    </div>
  )
}

export default SalesPointForm


