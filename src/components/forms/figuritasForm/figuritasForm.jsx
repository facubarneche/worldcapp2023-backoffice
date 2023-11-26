import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material"

import './figuritasForm.css'
import { useOnInit } from "src/customHooks/hooks"
import { cardService } from "src/domain/services/cardService/CardService"
import HandleError from "src/utils/handleError/HandleError"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { BASE_VALUE } from "src/domain/models/Card.model"

const FiguritasForm = ({ changeDisplay }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [players, setPlayers] = useState([])
  const [printsLevel, setPrintsLevel] = useState([])
  const navigate = useNavigate()
  // Inputs del form
  const [nro, setNro] = useState("") // Estado para el número
  const [isOnFire, setIsOnFire] = useState(true) // Estado para la casilla de verificación "On Fire"
  const [selectedPrintLevel, setSelectedPrintLevel] = useState("bajo") // Estado para el nivel de impresión
  const [valoracionBase, setValoracionBase] = useState(0)

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


  const calculateBaseValoration = (nro, isOnFire, selectedPrintLevel) => {
    const baseValue = BASE_VALUE
    const onFireMultiplier = isOnFire ? 1.5 : 1
    const evenMultiplier = nro % 2 === 0 ? 1.1 : 1.0
    const printLevelMultiplier = selectedPrintLevel === "bajo" ? 1.0 : 0.85

    return baseValue * onFireMultiplier * evenMultiplier * printLevelMultiplier
 
  } 
  
  useEffect(() => {
    // Convertir el número a un entero
    const parsedNro = parseInt(nro, 10)
 
    const calculatedValoracionBase = calculateBaseValoration(
      parsedNro,
      isOnFire,
      selectedPrintLevel
    )
    // Actualizar el estado de la valoración base
    setValoracionBase(calculatedValoracionBase)
  }, [nro, isOnFire, selectedPrintLevel])


  return (
    <div className="figuritas-form">
      <TextField
        required
        label="Nro"
        type="number"
        value={nro}
        onChange={(e) => setNro(e.target.value)}
      />

      <TextField
        className="figuritas-form__select"
        required
        select
        SelectProps={{ native: true }}
      >
        {players.map((player, index) => 
          <option key={index} value={player.nombre}>
            {`${player.nombre} ${player.apellido}`}
          </option>
        )}
      </TextField>

      <FormControlLabel
        className="figuritas-form__checkbox"
        control={
          <Checkbox
            checked={isOnFire}
            onChange={(e) => setIsOnFire(e.target.checked)}
          />
        }
        label="On Fire"
      />

      <TextField
        className="figuritas-form__select"
        required
        select
        SelectProps={{ native: true }}
        value={selectedPrintLevel}
        onChange={(e) => setSelectedPrintLevel(e.target.value)}
      >
        {printsLevel.map((printLevel) => 
          <option key={printLevel.nombre} value={printLevel.afectaValorEn}>
            {printLevel.nombre}
          </option>
        )}
      </TextField>

      <TextField
        className="figuritas-form__input"
        required
        label="Imagen"
        type="text"
      />

      {/* Mostrar la valoración base actualizada */}
      <strong>Valoración base {valoracionBase}</strong>
      <strong>Valoración total {1000}</strong>

      {/* totalValoration = () => this.valoration + this.baseValoration() */}

      <Button variant="contained" onClick={changeDisplay}>
      Guardar
      </Button>
      <Button variant="outlined" onClick={changeDisplay}>
      Volver
      </Button>
    </div>
  )

}

export default FiguritasForm