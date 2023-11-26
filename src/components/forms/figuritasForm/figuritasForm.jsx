import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"

import './figuritasForm.css'
import { useOnInit } from "src/customHooks/hooks"
import { cardService } from "src/domain/services/cardService/CardService"
import HandleError from "src/utils/handleError/HandleError"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { BASE_VALUE } from "src/domain/models/Card.model"

const FiguritasForm = ({ changeDisplay }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [players, setPlayers] = useState([])
  const [printsLevel, setPrintsLevel] = useState([])
  const [valorationBase, setValorationBase] = useState(0)
  // const [totalValoration, setTotalValoration] = useState(0)
  const nroRef = useRef(1)
  const onFireRef = useRef(false)
  const printLevelRef = useRef(1)
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
  
  const onFireMultiplier = () => onFireRef.current.checked ? 1.2 : 1.0
  const evenMultiplier = () => nroRef.current.value % 2 == 0 ? 1.1 : 1.0

  const calculateBaseValoration = () => {
    const baseValue = BASE_VALUE * onFireMultiplier() * evenMultiplier() * printLevelRef.current.value
    setValorationBase(baseValue)
    // setTotalValoration( + baseValue)
  }


  return (
    <div className="figuritas-form">
      <TextField 
        required label="Nro" 
        type="number" 
        defaultValue={1} 
        inputRef={nroRef} 
        onChange={calculateBaseValoration}
      />

      <TextField className="figuritas-form__select"
        required
        select
        SelectProps={{ native: true }}
      >
        {
          players.map((player, index) =>
            //TODO: Ver bien lo del value luego
            <option key={index} value={player} >
              {`${player.nombre} ${player.apellido}`}
            </option>
          )
        }
      </TextField>

      <FormControlLabel 
        className="figuritas-form__checkbox" 
        control={<Checkbox defaultChecked={true} />} 
        label="On Fire" 
        inputRef={onFireRef}
        onChange={calculateBaseValoration}
      />

      <TextField className="figuritas-form__select"
        required
        select
        SelectProps={{ native: true }}
        inputRef={printLevelRef} 
        onChange={calculateBaseValoration}
      >
        {
          printsLevel.map((printLevel) =>
          //TODO: Ver value aca, el back seguramente necesite el nombre
            <option key={printLevel.nombre} value={printLevel.afectaValorEn}>
              {printLevel.nombre}
            </option>
          )
        }
      </TextField>

      <TextField className="figuritas-form__input" required label="Imagen" type="text" />

      {/* TODO: Terminar esto */}
      <strong>Valoración base {valorationBase.toFixed(2)}</strong>
      <strong>Valoración total {1000}</strong>
      {/* totalValoration = () => this.valoration + this.baseValoration() */}


      <Button variant="contained" onClick={changeDisplay}>Guardar</Button>
      <Button variant="outlined" onClick={changeDisplay}>Volver</Button>
    </div>
  )
}

export default FiguritasForm