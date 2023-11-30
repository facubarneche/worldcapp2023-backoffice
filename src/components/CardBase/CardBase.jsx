import './CardBase.css'
import { Box, Card, Typography } from '@mui/material'
import { CustomDialog } from '../CustomDialog/CustomDialog'
import { useState } from 'react'
import { ElementType, BusinessType } from 'services/constants'

export const CardBase = ({ element, contentComponent, onEditClick, onDelete }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const marketIcon = () => {    
    return element.tipo === BusinessType.Kioscos
      ? 'fa-store'
      : element.tipo === BusinessType.Librerias
        ? 'fa-book'
        : element.tipo === BusinessType.Supermercados 
          ? 'fa-basket-shopping'
          : element.tipo === ElementType.Figuritas
            ? 'fa-id-badge' 
            : 'fa-futbol'
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
            <Typography className="card-base__text card-base__text--title">{element.title}</Typography>
          </Box>
          <Box className="card-base__actions">
            <i className="card-base__icon fas fa-trash-arrow-up fa--hot"onClick={() => setDeleteDialogOpen(true)}/>            
            <i className="card-base__icon fas fa-pen"onClick={() => onEditClick(element.id)}/>            
          </Box>
        </Box>
        {contentComponent}
        <Typography className="card-base__footer card-base__text card-base__text--upper">{element.footer}</Typography>
      </Card>

      <CustomDialog
        props={{ title: 'Confirmar eliminación', message: '¿Confirma desea borrar el punto de venta?' }}
        isOpen={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={() => handleConfirm(element.id)}
      />
    </>
  )
}
