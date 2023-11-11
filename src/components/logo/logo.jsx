import { Box } from "@mui/material"

export const Logo = () => {
  return (
    <Box>
      <img className="logo__img" src="assets/logo-icon.png" alt="WorldCapp Logotipo"/>
      <section className="logo__text">
        <span className="logo_first-part">world</span><span className="logo-center-dot">.</span><span className="logo_last-part">capp</span>
      </section>
    </Box>
  )
}