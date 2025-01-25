import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate, useOutletContext } from 'react-router';

export default function DialogBox() {
  const [seatBookedResponse] = useOutletContext();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(() => false);
    navigate("/");
    navigate(0);
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {
            seatBookedResponse.success ? (
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
              </Alert>
            ) : (
              <Alert severity="error">
                <AlertTitle>Failed</AlertTitle>
              </Alert>
            )
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Alert icon={false} severity={`${seatBookedResponse.success ? "success" : "error"}`}>
              {seatBookedResponse.message}
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
