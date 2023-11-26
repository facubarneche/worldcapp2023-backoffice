import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { CardBase } from "src/components/CardBase/CardBase"
import CustomCardContent from "src/components/CustomContent/CustomCardContent"
import { Searchbar } from "src/components/Searchbar/Searchbar"
import { useOnInit } from "src/customHooks/hooks"
import { CustomSearch } from "src/domain/models/CustomSearch/CustomSearch"
import { cardService } from "src/domain/services/cardService/CardService"
import HandleError from "src/utils/handleError/HandleError"

export const Cards = () => {
  const [cards, setCards] = useState([])
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  
  useOnInit(async () => {
    try {
      setHeaderTitle('Figuritas')
      getCards(new CustomSearch())
    } catch (error) {
      HandleError(error)
    }
  })

  const getCards = async (filter) => {
    setCards(await cardService.getCards(filter))
  }

  return (
    <>
      <div className="layout__content">
        <Searchbar getFilterCards={getCards} />
        {cards.map((card, index) =>
          <CardBase
            key={index}
            card={card}
            content={CustomCardContent(card)}
          />
        )}
      </div>
    </>
  )
}
