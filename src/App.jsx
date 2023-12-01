import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Import Pages
import { Login } from 'pages/Login/Login'
import { Home } from 'pages/Home/Home'
import { LayoutFooter } from 'components/LayoutFooter/LayoutFooter'
import { LayoutHeader } from 'components/LayoutHeader/LayoutHeader'

// Import Styles
import './App.css'
import { Error } from 'pages/Error/Error'
import { SnackbarProvider } from 'notistack'
import { PlayerForm } from 'src/pages/OneForAll/PlayerForm'
import { CardForm } from 'src/pages/OneForAll/CardForm'
import { MarketForm } from 'pages/OneForAll/MarketForm'
import { Teams } from 'pages/Teams/Teams'
import { OneForAll } from 'pages/OneForAll/OneForAll'
import { marketService } from 'services/MarketService/MarketService'
import { CustomMarketContent } from 'components/CustomContent/CustomMarketContent'
import { cardService } from 'services/CardService/CardService'
import { CustomCardContent } from 'components/CustomContent/CustomCardContent'
import { playerService } from 'services/PlayerService/PlayerService'
import { CustomPlayerContent } from 'components/CustomContent/CustomPlayerContent'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutFooter />}>
      <Route path="/">
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<Login />}></Route>
        <Route element={<LayoutHeader />}>
          <Route path="home" element={<Home />}></Route>
          <Route
            path="figuritas"
            element={<OneForAll key="One_For_All-1" service={cardService} contentComponent={CustomCardContent} />}
          ></Route>
          <Route path="figuritas/nuevo" element={<CardForm headerTitle={'Nueva figurita'} />}></Route>
          <Route path="figuritas/:id/editar" element={<CardForm headerTitle={'Editar una figurita'} />} />
          <Route
            path="jugadores"
            element={<OneForAll key="One_For_All-2" service={playerService} contentComponent={CustomPlayerContent} />}
          ></Route>
          <Route path="jugadores/nuevo" element={<PlayerForm headerTitle={'Nuevo jugador'} />}></Route>
          <Route path="jugadores/:id/editar" element={<PlayerForm headerTitle={'Editar un jugador'} />} />
          <Route
            path="puntos-de-venta"
            element={<OneForAll key="One_For_All-3" service={marketService} contentComponent={CustomMarketContent} />}
          ></Route>
          <Route path="puntos-de-venta/nuevo" element={<MarketForm headerTitle={'Nuevo punto de venta'} />}></Route>
          <Route path="puntos-de-venta/:id/editar" element={<MarketForm headerTitle={'Editar punto de venta'} />} />
          <Route path="selecciones" element={<Teams />}></Route>
        </Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Route>,
  ),
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SnackbarProvider className="snackbar" />
    </>
  )
}

export default App
