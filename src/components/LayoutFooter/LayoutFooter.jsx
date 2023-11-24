import { useState } from "react"
import { Outlet } from "react-router-dom"
import './LayoutFooter.css'

const LayoutFooter = () => {
  const [foterContent, setFoterContent] = useState()

  return <>
    <Outlet context={[setFoterContent]}/>    
    <footer className="layoutFooter">{foterContent}</footer>
  </>
}

export default LayoutFooter