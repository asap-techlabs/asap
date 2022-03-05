import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";


//style of modal
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 18,
  p: 4,
  textAlign: 'center'
};


const useStyles = makeStyles((theme) => ({
  marginAutoItem: {
    margin: "auto",
  },
  marginBetweenElements: {
    margin: "15px",
  },
}));
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BasicModal(id) {
  // this function displays a modal to confirm the action of the user.
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.marginAutoItem}>
        <Checkbox { ... label} /> The receiver pays the order.
        <br />
      <CardActions>
        <Button
          onClick={handleOpen}
          variant="contained"
          color="success"
          className={classes.marginBetweenElements}
        >
          Confirm & Pay
        </Button>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your order is confirmed!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thanks for trusting us.
          </Typography>
          <Button
            variant="contained"
            href={"/map/" + id.id}
            className={classes.marginAutoItem}
          >
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
