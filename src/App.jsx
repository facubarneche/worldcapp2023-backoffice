import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// Import Pages
import Login from 'pages/Login'
import Home from 'pages/Home'
import Cards from 'pages/Cards'
import Players from 'pages/Players'
import SalesPoint from 'pages/SalesPoint'
import Teams from 'pages/Teams'

// Import Styles
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Navigate to="/login" />} />
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/figuritas' element={<Cards/>}></Route>
      <Route path='/jugadores' element={<Players/>}></Route>
      <Route path='/puntos-de-venta' element={<SalesPoint/>}></Route>
      <Route path='/selecciones' element={<Teams/>}></Route>
    </Route>
  )
)

function App() {
  return (    
    <RouterProvider router={router} />
  )
}

export default App
