import { CardBase } from "components/CardBase/CardBase"

const propsCardStub = {
  title: 'card figurita',
  footer: 'card footer',
  content: {
    numero: 1,
    onFire: 'on fire',
    nivelImpresion: 'Alto',
  },
}

const propsPlayerStub = {
  title: 'card jugador',
  footer: 'card footer',
  content: {
    anioDebut: '14/07/2001', 
    nroCamiseta: '11', 
    seleccion:'Argentina', 
    posicion: 'Delantero',
    altura: "1.74", 
    peso: '80'
  },
}

const propsSalesStub = {
  title: 'card punto venta',
  footer: 'card footer',
  content: {
    direccion: 'calle genial',
    stock: 123
  },
}

export const Cards = () => {  
  const [cards, setCards] = useState([])  
  const [setHeaderTitle] = useOutletContext()
  
  useOnInit(async () => {
    try {
      setHeaderTitle('Figuritas')
      setCards(await cardService.getCards())
    } catch (error) {
      HandleError(error, navigate)
    }
  })

  return (
    <CardBase
      cardProps={propsSalesStub}
      customCardContent={CustomSalesPointContent(propsSalesStub.content)}
    />
  )
}
