import './CardForm.css'
import { useOnInit } from 'custom_hooks/hooks'
import { cardService } from 'services/CardService/CardService'
import { HandleError } from 'utils/HandleError/HandleError'
import { Card } from 'models/CardModel/Card.model'
import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import { FormActions } from 'src/components/FormActions/FormActions'

export const CardForm = ({ headerTitle }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [players, setPlayers] = useState([])
  const [printsLevel, setPrintsLevel] = useState([])
  const navigate = useNavigate()

  const [card, setCard] = useState(new Card({ numero: '', nombre: '', onFire: undefined, nivelImpresion: '' }))
  // Inputs del form

  useEffect(() => {
    console.log(card)
  })
g
  useOnInit(async () => {
    try {
      setHeaderTitle(headerTitle)
      const { jugadores, levelPrints } = await cardService.getDataCreateCards()
      console.log(jugadores)
      console.log(levelPrints)
      setPlayers(jugadores.map((jugador) => jugador.nombre + ' ' + jugador.apellido))
      setPrintsLevel(levelPrints.map((level) => level.nombre))
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  const handleBack = () => {
    navigate('/figuritas')
  }

  const handleChange = (value, key) => {
    setCard(new Card({ ...card.JSONCreateModifyCard, [key]: value }))
  }

  return (
    <div className="figuritas-form">
      <TextField required label="Nro" type="number" value={card.numero} onChange={(e) => handleChange(e.target.value, 'numero')} />

      <TextField
        className="figuritas-form__select"
        required
        select
        value={card.nombre}
        onChange={(e) => {
          handleChange(e.target.value, 'nombre')
        }}
      >
        {players.map((player, index) => (
          <MenuItem key={index} value={index}>
            {`${player.nombre} ${player.apellido}`}
          </MenuItem>
        ))}
      </TextField>

      <FormControlLabel
        className="figuritas-form__checkbox"
        control={<Checkbox checked={card.onFire} onChange={(e) => handleChange(e.target.checked, 'onFire')} />}
        label="On Fire"
      />

      <TextField
        className="figuritas-form__select"
        required
        select
        value={card.nivelImpresion}
        onChange={(e) => handleChange(e.target.value, 'nivelImpresion')}
      >
        {printsLevel.map((printLevel) => (
          <MenuItem key={printLevel.nombre} value={printLevel.nombre}>
            {printLevel.nombre}
          </MenuItem>
        ))}
      </TextField>

      <TextField className="figuritas-form__input" required label="Imagen" type="text" />

      <strong>Valoración base {card.baseValoration()}</strong>
      <strong>Valoración total {card.totalValoration()}</strong>

      <FormActions rightButtonClick={handleBack} />
    </div>
  )
}
export default CardForm
