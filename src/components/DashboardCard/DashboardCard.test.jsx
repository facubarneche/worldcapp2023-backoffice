import { render, screen } from "@testing-library/react"
import { DashboardCard } from "./DashboardCard"
import { itemsDashboardBoxMock } from "mocks/ItemsDashboardBox"


describe('Tests DashboardBox', () => {
  it('Al renderizar se obtienen los valores correctos', () => {
    //Arrange
    render(<DashboardCard itemBox={itemsDashboardBoxMock[0]}/>)
    //Assert
    const itemboxName = screen.getByTestId('itembox-name')
    const itemboxQuantity = screen.getByTestId('itembox-quantity')
    expect(itemboxName).toHaveTextContent('Figuritas Ofrecidas')
    expect(itemboxQuantity).toHaveTextContent('13')
  })

  it('El icono renderiza correctamente', () => {
    //Arrange
    render(<DashboardCard itemBox={itemsDashboardBoxMock[2]}/>)
    //Assert
    const icon = screen.getByTestId('StoreIcon')
    expect(icon).toBeVisible()
  })

  it('Al renderizar se obtiene información sobre el icono correctamente', () => {
    //Arrange
    render(<DashboardCard itemBox={itemsDashboardBoxMock[2]}/>)
    //Assert
    const itemboxIcon = screen.getByTestId('itembox-icon')
    const icon = screen.getByTestId('StoreIcon')
    expect(itemboxIcon).toHaveClass('dashboard-box__section')
    expect(icon).toHaveClass('dashboard-box__icon')
  })
})
