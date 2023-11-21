import { render } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"


describe('Tests Home', () => {
  it('El componente renderiza correctamente', () => {
    //Arrange
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    
  })
})
