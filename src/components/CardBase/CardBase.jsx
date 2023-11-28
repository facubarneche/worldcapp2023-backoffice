import './CardBase.css'
import { Box, Card, Typography } from '@mui/material'
import { CustomDialog } from '../CustomDialog/CustomDialog'
import { useState } from 'react'
import { BusinessType } from 'services/constants'

export const CardBase = ({ card, contentComponent, onEditClick, onDelete }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const marketIcon = () => {    
    return card.tipo === BusinessType.Kioscos
      ? 'fa-store'
      : card.tipo === BusinessType.Librerias
        ? 'fa-book'
        : 'fa-basket-shopping'
  }

  const handleConfirm = (id) => {
    setDeleteDialogOpen(false)
    onDelete(id)
  }

  return (
    <>
      <Card className="card-base">
        <Box className="card-base__header">
          <Box className="card-base__title">
            <i className={`card-base__icon card-base__icon--large fas ${marketIcon()}`}/>
            <Typography className="card-base__text card-base__text--title">{card.title()}</Typography>
          </Box>
          <Box className="card-base__actions">
            <i className="card-base__icon fas fa-trash-arrow-up fa--hot"onClick={() => setDeleteDialogOpen(true)}/>            
            <i className="card-base__icon fas fa-pen"onClick={() => onEditClick(card.id)}/>            
          </Box>
        </Box>
        {contentComponent}
        <Typography className="card-base__footer card-base__text card-base__text--upper">{card.footer()}</Typography>
      </Card>

      <CustomDialog
        props={{ title: 'Confirmar eliminación', message: '¿Confirma desea borrar el punto de venta?' }}
        isOpen={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={() => handleConfirm(card.id)}
      />
    </>
  )
}
