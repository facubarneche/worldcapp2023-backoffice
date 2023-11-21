import { useOutletContext } from "react-router-dom"
import { useOnInit } from "src/customHooks/hooks"

export default function Cards() {
  const [setHeaderTitle] = useOutletContext()
  
  useOnInit(() => {
    setHeaderTitle('Figuritas')
  })

  return (
    <div className="cards">Cards</div>
  )
}