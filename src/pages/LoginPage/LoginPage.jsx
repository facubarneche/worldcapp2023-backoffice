import { Container, Box, TextField, Button, InputLabel } from "@mui/material"
import { LogoComponent } from "components/LogoComponent/LogoComponent"
import { userService } from "src/domain/services/UserService/UserService"

export const LoginPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    userService.login(data)
    console.log({
      email: data.get('user'),
      password: data.get('password'),
    })
  }

  return (
    <Container component="main" className="login-form">
      <LogoComponent />
      <Box component="form" onSubmit={handleSubmit} noValidate className="login-form__actions">
        <InputLabel className="input__label" htmlFor="user">
          Usuario
        </InputLabel>
        <TextField
          className="input"
          margin="normal"
          fullWidth
          id="user"
          name="user"
          autoFocus
          required
        />
        <InputLabel className="input__label" htmlFor="password">
          Contraseña
        </InputLabel>
        <TextField
          className="input"
          margin="normal"
          fullWidth
          id="password"
          name="password"
          type="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="login__button"
        >
          Ingresar
        </Button>
      </Box>
    </Container >
  )
}