import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export function useModal(p){
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true);
      };
    
      const closeModal = () => {
        setOpen(false);
      };

    return [
        () => <AlertDialogSlide 
            open={open}
            closeModal={closeModal}
        />,
        openModal,
    ]
}

function AlertDialogSlide({open, closeModal}) {
 
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeModal}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">About this</DialogTitle>
        <DialogContent dividers>
            <DialogContentText id="alert-dialog-slide-description">
                This web application was created by David Temple and aims to collect, display and compare information on a global level with respect to the pandemic caused by the COVID-19 virus.
                The data used in this application are collected from the <a href="https://disease.sh/" rel="noopener noreferrer" target="_blank">here</a> v3 api and you can see the source code <a href="https://github.com/davet2408/Covid-19-tracker" rel="noopener noreferrer" target="_blank">here</a>.
            </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
