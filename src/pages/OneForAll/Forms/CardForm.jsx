import 'src/components/Forms/FiguritasForm/FiguritasForm.css'
import { useOnInit } from 'custom_hooks/hooks'
import { cardService } from 'services/CardService/CardService'
import { HandleError } from 'utils/HandleError/HandleError'
import { Card } from 'models/CardModel/Card.model'
import { useState, useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { FormActions } from 'src/components/FormActions/FormActions'

export const CardForm = ({ headerTitle }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [players, setPlayers] = useState([])
  const [printsLevel, setPrintsLevel] = useState([])
  const navigate = useNavigate()

  // Inputs del form
  const [nro, setNro] = useState('')
  const [isOnFire, setIsOnFire] = useState(true) 
  const [selectedPrintLevel, setSelectedPrintLevel] = useState('bajo') 
  const [valoracionBase, setValoracionBase] = useState(0)
  const [, setValoracionJugador] = useState(0)
  const [valoracionTotal, setValoracionTotal] = useState(0)
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0)

  useOnInit(async () => {
    try {
      setHeaderTitle(headerTitle)
      const { jugadores, levelPrints, valoracion } = await cardService.getDataCreateCards()
      setPlayers(jugadores)
      setPrintsLevel(levelPrints)
      setValoracionJugador(valoracion)
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  useEffect(() => {
    const selectedPlayer = players[selectedPlayerIndex]
    const playerValoracion = selectedPlayer ? selectedPlayer.valoracion : 0
  
    const card = new Card({
      numero: Number(nro),
      onFire: isOnFire,
      nivelImpresion: selectedPrintLevel,
      valoracion: playerValoracion,
    })
  
    setValoracionBase(card.baseValoration())
    setValoracionTotal(card.totalValoration())
  }, [nro, isOnFire, selectedPrintLevel, selectedPlayerIndex, players])

  const handleBack = () => {
    navigate('/figuritas')
  }
  
  
  return (
    <div className="figuritas-form">
      <TextField required label="Nro" type="number" value={nro} onChange={(e) => setNro(e.target.value)} />

      <TextField
        className="figuritas-form__select"
        required
        select
        SelectProps={{ native: true }}
        value={selectedPlayerIndex}
        onChange={(e) => setSelectedPlayerIndex(parseInt(e.target.value, 10))}
      >
        {players.map((player, index) => 
          <option key={index} value={index}>
            {`${player.nombre} ${player.apellido}`}
          </option>
        )}
      </TextField>

      <FormControlLabel
        className="figuritas-form__checkbox"
        control={<Checkbox checked={isOnFire} onChange={(e) => setIsOnFire(e.target.checked)} />}
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

      <TextField className="figuritas-form__input" required label="Imagen" type="text" />

      <strong>Valoración base {valoracionBase}</strong>
      <strong>Valoración total {valoracionTotal}</strong>

      <FormActions rightButtonClick={handleBack} />
    </div>
  )

}
export default CardForm