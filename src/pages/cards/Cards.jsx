// import { useOutletContext } from "react-router-dom"
// import { useOnInit } from "src/customHooks/hooks"

import { CardBase } from 'components/CardBase/CardBase'
import { useOutletContext } from 'react-router-dom'
import CustomCardContent from 'src/components/CustomContent/CustomCardContent'
import { useOnInit } from 'src/customHooks/hooks'

const props = {
  title: 'CardTitle',
  footer: 'CardFooter',
  content: {
    numero: 1,
    onFire: 'on fire',
    nivelImpresion: 'Alto',
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
      cardProps={props}
      customCardContent={CustomCardContent(props.content)}
    />
  )
}
