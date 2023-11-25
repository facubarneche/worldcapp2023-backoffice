import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"

import './figuritasForm.css'
import { useOnInit } from "src/customHooks/hooks"
import { cardService } from "src/domain/services/cardService/CardService"
import HandleError from "src/utils/handleError/HandleError"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { BASE_VALUE } from "src/domain/models/Card.model"

const FiguritasForm = ({ changeDisplay }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [players, setPlayers] = useState([])
  const [printsLevel, setPrintsLevel] = useState([])
  const navigate = useNavigate()

  useOnInit(async () => {
    try {
      setHeaderTitle('Nueva Figuritas')
      const { jugadores, levelPrints } = await cardService.getDataCreateCards()
      setPlayers(jugadores)
      setPrintsLevel(levelPrints)
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  const handleChange = (event) => {
    const newValue = event.target.value
    console.log(newValue)
  }
  const calculateBaseValoration = () => BASE_VALUE
  // baseValoration = () => this.BASE_VALUE * this.onFireMultiplier() * this.evenMultiplier() * this.printMultiplier() */}


  return (
    <div className="figuritas-form">
      <TextField required label="Nro" type="number" onChange={handleChange}/>

      <TextField className="figuritas-form__select"
        required
        select
        SelectProps={{ native: true }}
      >
        {
          players.map((player, index) =>
          //TODO: Ver bien lo del value luego
            <option key={index} value={player.nombre}>
              {`${player.nombre} ${player.apellido}`}
            </option>
          )
        }
      </TextField>

      <FormControlLabel className="figuritas-form__checkbox" control={<Checkbox defaultChecked={true} />} label="On Fire" />

      <TextField className="figuritas-form__select"
        required
        select
        SelectProps={{ native: true }}
      >
        {
          printsLevel.map((printLevel) =>
            <option key={printLevel.nombre} value={printLevel.afectaValorEn}>
              {printLevel.nombre}
            </option>
          )
        }
      </TextField>

      <TextField className="figuritas-form__input" required label="Imagen" type="text" />

      {/* TODO: Terminar esto */}
      <strong>Valoración base {calculateBaseValoration()}</strong>
      <strong>Valoración total {1000}</strong>
      {/* totalValoration = () => this.valoration + this.baseValoration() */}


      <Button variant="contained" onClick={changeDisplay}>Guardar</Button>
      <Button variant="outlined" onClick={changeDisplay}>Volver</Button>
    </div>
  )
}

export default FiguritasForm