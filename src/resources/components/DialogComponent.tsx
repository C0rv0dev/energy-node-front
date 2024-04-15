import { Box, Button, Dialog, DialogContent, DialogTitle, Divider } from '@mui/material';
import React from 'react';

interface DialogComponentProps {
  open: boolean;
  type: 'confirm' | 'warning' | 'error';
  headerTitle: string;
  confirmButtonColor?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
}


function DialogComponent({
  open,
  type,
  headerTitle,
  confirmButtonColor = 'primary',
  children,
  onClose,
  onConfirm,
}: DialogComponentProps) {
  const getHeaderStyle = () => {
    const base = {
      color: 'white',
      fontSize: '1.5rem',
      marginBottom: '10px',
    }

    switch (type) {
      case 'confirm':
        return {
          ...base,
          backgroundColor: 'gray',
        };
      case 'warning':
        return {
          ...base,
          backgroundColor: 'yellow',
          color: 'black',
        };
      case 'error':
        return {
          ...base,
          backgroundColor: 'red',
        };
      default:
        return {
          ...base,
          backgroundColor: 'blue',
        };
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle sx={getHeaderStyle}>
        {headerTitle}
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>

      <Divider />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          onClick={onClose}
          variant='outlined'
          color="info"
          sx={{
            width: '100%',
            padding: '10px',
            borderRadius: 0,
          }}
        >
          Cancel
        </Button>        

        <Button
          onClick={onConfirm}
          variant='contained'
          color={confirmButtonColor}
          sx={{
            width: '100%',
            padding: '10px',
            borderRadius: 0,
          }}
        >
          Confirm
        </Button>
      </Box>
    </Dialog>
  )
}

export default DialogComponent;
