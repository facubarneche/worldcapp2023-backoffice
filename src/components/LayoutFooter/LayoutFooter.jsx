import { Outlet } from "react-router-dom"

const LayoutFooter = ({children}) => {

  return <>
    <Outlet />
    <footer>{children}</footer>
  </>
}

export default LayoutFooter