import "./Logo.css"
import { Box } from "@mui/material"

export const LogoComponent = () => {
  return (
    <Box className="logo">
      <img className="logo__img" src="/src/assets/logo-icon.png" alt="WorldCapp Logotipo" />
      <section className="logo__text">
        <span className="logo__first-part">world</span><span className="logo__center-dot">.</span><span className="logo__last-part">capp</span>
      </section>
    </Box>
  )
}