import CalcOrder from "./CalculateOrder";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
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
        <CalcOrder key={id} />
        <CardActions className={classes.marginAutoItem}>
          <Button variant="outlined" className={classes.marginBetweenElements} to={"/search/"}>
            Back
          </Button>
          <Button href={"/confirm/" + id} variant="contained" color="success">
            Confirm?
          </Button>
        </CardActions>
      </div>
    );
    // should be redirecting to /login/ but the logic behind is not ready yet.
}
