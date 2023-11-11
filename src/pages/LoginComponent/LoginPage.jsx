import { Container, Box, TextField, Button } from "@mui/material"
import { LogoComponent } from '../../components/LogoComponent/LogoComponent'

export const LoginPage = () => {

  const handleSubmit = () => { }


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LogoComponent />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"            
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"            
            type="password"
            id="password"            
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
        </Box>
      </Box>
    </Container>
  )
}