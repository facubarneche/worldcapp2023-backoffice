import { useOutletContext } from "react-router-dom"
import { useOnInit } from "src/customHooks/hooks"

export default function Players() {
  const [setHeaderTitle] = useOutletContext()
  
  useOnInit(() => {
    setHeaderTitle('Jugadores')
  })
  return (
    <div className="players">PLAYERS</div>
  )
}