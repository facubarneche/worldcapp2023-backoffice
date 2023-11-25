// import { useOutletContext } from "react-router-dom"
// import { useOnInit } from "src/customHooks/hooks"

import { CardBase } from 'components/CardBase/CardBase'
import { useOutletContext } from 'react-router-dom'
import { useOnInit } from 'src/customHooks/hooks'

const props = {
  title: 'CardTitle',
  footer: 'CardFooter',
  content: 'CardContent',
}

export default function Cards() {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()

  useOnInit(() => {
    setHeaderTitle('Figuritas')
  })

  return <CardBase cardProps={props} customCardContent={props.content} />
}
