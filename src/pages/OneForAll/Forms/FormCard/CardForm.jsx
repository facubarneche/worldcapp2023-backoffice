import './CardForm.css'
import { useOnInit } from 'custom_hooks/hooks'
import { cardService } from 'services/CardService/CardService'
import { HandleError } from 'utils/HandleError/HandleError'
import { Card } from 'models/CardModel/Card.model'
import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import { FormActions } from 'src/components/FormActions/FormActions'

export const CardForm = ({ headerTitle, saveFunc }) => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [players, setPlayers] = useState([])
  const [printsLevel, setPrintsLevel] = useState([])
  const navigate = useNavigate()
  const params = useParams()

  const [card, setCard] = useState(new Card({ numero: '', nombre: '', onFire: false, nivelImpresion: '' }))


  useEffect(() => {
    console.log(card)
  })

  useOnInit(async () => {
    try {
      setHeaderTitle(headerTitle)
      const { jugadores, levelPrints } = await cardService.getDataCreateCards()
      console.log(jugadores)
      setPlayers(jugadores)
      setPrintsLevel(levelPrints.map((level) => level.nombre))
      
      const setCardInfo = async (id) => {
        const response = await cardService.getById(id)
        setCard(new Card({ ...response.JSONCreateModifyCard, id: id }))
      }

      if (params.id !== undefined) {
        setCardInfo(params.id)
      }
      setPlayers(jugadores)
      setPrintsLevel(levelPrints.map((level) => level.nombre))
      setHeaderTitle(headerTitle)
      
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  const setCardValue = (key, value) => {
    setCard((prev) => new Card({ id: card.id, ...prev.JSONCreateModifyCard, [key]: value }))
  }

  const handleBack = () => {
    navigate('/figuritas')
  }

  const handleChange = (value, key) => {
    setCard(new Card({ ...card.JSONCreateModifyCard, [key]: value }))
    setCardValue(key, value)
  }
  const handleSave = () => {
    card.isNew ? saveFunc(card) : saveFunc(card, card.id)
    handleBack()
  }

  return (
    <main className="formPlayer formPlayer__flexContainer">

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
          {players.map((player) => 
            <MenuItem key={`${player.nombre} ${player.apellido}`} value={`${player.nombre} ${player.apellido}`}>
              {`${player.nombre} ${player.apellido}`}
            </MenuItem>
          )}
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
          {printsLevel.map((printLevel) => 
            <MenuItem key={printLevel} value={printLevel}>
              {printLevel}
            </MenuItem>
          )}
        </TextField>

        <TextField className="figuritas-form__input" required label="Imagen" type="text" />

        <strong>Valoración base {card.baseValoration()}</strong>
        <strong>Valoración total {card.totalValoration()}</strong>

        <FormActions handleLeftButtonClick={handleSave} handleRightButtonClick={handleBack} />
      </div>
    </main>
  )
}
export default CardForm

