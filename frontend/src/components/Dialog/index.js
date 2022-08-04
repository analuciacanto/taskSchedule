import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {

  const {open, handleClose, handleSubmit, children} = props;  

  return (
    <div>   
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>        
            {children}
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
