import { useState } from "react"
import { Outlet } from "react-router-dom"
import './LayoutFooter.css'

export const LayoutFooter = () => {
  const [foterContent, setFoterContent] = useState()

  return <>
    <Outlet context={[setFoterContent]}/>    
    <footer className="layout-footer">{foterContent}</footer>
  </>
}
