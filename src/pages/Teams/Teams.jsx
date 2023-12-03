import { useOutletContext } from "react-router-dom"
import { useOnInit } from "custom_hooks/hooks"
import { useState } from "react"

import Typography from '@mui/material/Typography'
import { Accordion, AccordionDetails, AccordionSummary } from "src/utils/AccordionStyles/AccordionStyles"
  


export const Teams = () => {
  // @ts-ignore
  const [setHeaderTitle] = useOutletContext()
  const [expanded, setExpanded] = useState()
      
  useOnInit(() => {
    setHeaderTitle('Selecciones')
  })
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}