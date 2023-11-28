import "./CustomDialog.css"
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, DialogContentText } from "@mui/material"

export const CustomDialog = ({ props, isOpen, onClose, onConfirm}) => {   

  return (
    <Dialog open={isOpen} onClose={onClose} className="c-dialog">
      <DialogTitle className="c-dialog__text c-dialog__text--title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText className="c-dialog__text">
          {props.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className="c-dialog__button c-dialog__button--secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button className="c-dialog__button c-dialog__button--primary" onClick={onConfirm} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

