import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Home } from "./Home"



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
