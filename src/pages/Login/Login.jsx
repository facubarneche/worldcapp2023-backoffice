import { Container, Box, TextField, Button, InputLabel } from '@mui/material'
import { formToJSON } from 'axios'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { userService } from 'services/UserService/UserService'
import { DEBUG_MODE } from 'services/constants'
import { LogoComponent, LogoImageComponent } from 'components/LogoComponent/LogoComponent'
import { useOnInit } from 'src/hooks/useOnInit'
import { HandleError } from 'utils/HandleError/HandleError'

export const Login = () => {
  const navigate = useNavigate()
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // Solicitud de login al service

    try {
      await userService.login(formToJSON(data)).then(() => {
        setRedirect(true)
      })
    } catch (error) {
      HandleError(error, navigate)
    }
    // Reporte de valores que vienen el el formulario
    DEBUG_MODE && report(data)
  }

  const report = (data) => {
    console.log({
      userName: data.get('userName'),
      password: data.get('password'),
    })
  }

  if (redirect) {
    return <Navigate to="/home" />
  }

  return (
    <Container component="main" className="login-form">
      <LogoComponent />
      <Box component="form" onSubmit={handleSubmit} noValidate className="login-form__actions">
        <InputLabel className="input__label" htmlFor="userName">
          Usuario
        </InputLabel>
        <TextField className="input" margin="normal" fullWidth id="userName" name="userName" autoFocus required />
        <InputLabel className="input__label" htmlFor="password">
          Contraseña
        </InputLabel>
        <TextField className="input" margin="normal" fullWidth id="password" name="password" type="password" />
        <Button type="submit" fullWidth variant="contained" className="login__button">
          Ingresar
        </Button>
      </Box>
      <LogoImageComponent />
    </Container>
  )
}
