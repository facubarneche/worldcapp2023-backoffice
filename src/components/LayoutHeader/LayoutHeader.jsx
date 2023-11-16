import { useState } from "react"
import { Outlet } from "react-router-dom"

const LayoutHeader = () => {
  const [headerTitle, setHeaderTitle] = useState('hola')
  return <>
    <header>{headerTitle}</header>
    <Outlet context={setHeaderTitle}/>
  </>
}

export default LayoutHeader