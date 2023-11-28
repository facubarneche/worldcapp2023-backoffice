import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Import Pages
import LayoutFooter from 'components/LayoutFooter/LayoutFooter'
import LayoutHeader from 'components/LayoutHeader/LayoutHeader'

// Import Styles
import './App.css'
import { SnackbarProvider } from 'notistack'
import { MarketForm } from 'pages/Markets/MarketForm'
import { Login } from 'pages/Login/Login'
import Home from 'pages/Home/Home'
import { Cards } from 'pages/Cards/Cards'
import Players from 'src/pages/Players/Players'
import FormPlayer from 'pages/FormPlayer/FormPlayer'
import { Markets } from 'pages/Markets/Markets'
import Teams from 'src/pages/Teams/Teams'
import Error from 'pages/Error/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutFooter />}>
      <Route path="/">
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<Login />}></Route>
        <Route element={<LayoutHeader />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="figuritas" element={<Cards />}></Route>
          <Route path="jugadores" element={<Players />}></Route>
          <Route path="nuevo-jugador" element={<FormPlayer headerTitle={'Nuevo jugador'} />}></Route>
          <Route path="puntos-de-venta" element={<Markets />}></Route>          
          <Route path="punto-de-venta/nuevo" element={<MarketForm headerTitle={'Nuevo punto de venta'} />}></Route>
          <Route path="punto-de-venta/:id/editar" element={<MarketForm headerTitle={'Editar punto de venta'}/>} />
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
