// import { useOutletContext } from "react-router-dom"
// import { useOnInit } from "src/customHooks/hooks"

import { CardBase } from 'components/CardBase/CardBase'
import { useOutletContext } from 'react-router-dom'
import CustomCardContent from 'src/components/CustomContent/CustomCardContent'
import CustomPlayerContent from 'src/components/CustomContent/CustomPlayerContent'
import CustomSalesPointContent from 'src/components/CustomContent/CustomSalesPointContent'
import { useOnInit } from 'src/customHooks/hooks'

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

export default function Cards() {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()

  useOnInit(() => {
    setHeaderTitle('Figuritas')
  })
  return (
    <CardBase
      cardProps={propsSalesStub}
      customCardContent={CustomSalesPointContent(propsSalesStub.content)}
    />
  )
}
