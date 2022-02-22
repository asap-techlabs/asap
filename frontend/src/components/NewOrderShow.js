import React from "react";
import FetchOrder from "./FetchOrder";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

const useStyles = makeStyles((theme) => ({
  marginAutoItem: {
    margin: "auto",
  },
  marginBetweenElements: {
    margin: "15px",
  },
}));

export default function NewOrderShow() {
  // this funcion shows the data from the order for the 1st time, the user can confirm or go back
  const id = window.location.pathname.split("/")[2];
  const classes = useStyles();
  return (
    <div className="card border-light mb-3" style={{ marginTop: "50px" }}>
      <h3 className="card-title">Your ride is almost ready !</h3>
      <Card sx={{ minWidth: 175, boxShadow: "none" }}>
        <FetchOrder />
        <CardActions className={classes.marginAutoItem}>
          <Button
            variant="outlined"
            className={classes.marginBetweenElements}
            to={"/search/"}
          >
            Back
          </Button>
          <Button href={"/confirm/" + id} variant="contained" color="success">
            Confirm?
          </Button>
        </CardActions>
      </Card>
    </div>
  );
  // should be redirecting to /login/ but the logic behind is not ready yet.
}
