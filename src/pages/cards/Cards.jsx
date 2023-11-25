import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FiguritasForm from "src/components/forms/figuritasForm/figuritasForm"
import { useOnInit } from "src/customHooks/hooks"
import { cardService } from "src/domain/services/cardService/CardService"
import HandleError from "src/utils/handleError/HandleError"
import { useOutletContext } from "react-router-dom"
import "./Cards.css"

const Cards = () => {
  const [displayForm, setDisplayForm] = useState(false)
  const [cards, setCards] = useState([])
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const navigate = useNavigate()

  useOnInit(async () => {
    try {
      setHeaderTitle('Figuritas')
      setCards(await cardService.getCards())
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  const changeDisplay = () => {
    setDisplayForm(!displayForm)
  }

  return (
    <>
      <h1>FIGURITAS PAGE</h1>
      {
        !displayForm &&
        // TODO: Agregar la card, el resto de componentes vienen por layout
        <>
          <TextField id="outlined-search" label="BUSCADOR Q" type="search" placeholder="BUSCADOR" />
          {
            cards.map(card =>
              <Box key={card.id} className='card'>
                <div>{`${card.firstName} ${card.lastName}`}</div>
                <div>#{card.number}</div>
                <div>{card.baseValoration()}</div>
                <div>{card.onFire ? 'On Fire' : <del>On Fire</del>}</div>
                <div>{card.printLevel.nombre}</div>
                <div>{card.totalValoration()}</div>
              </Box>
            )
          }
          <Button className="card__button" onClick={changeDisplay}>+</Button>
        </>
      }
      {
        displayForm && <FiguritasForm changeDisplay={changeDisplay} />
      }
    </>
  )
}

export default Cards