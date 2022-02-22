import React from "react";
import FetchOrder from "./FetchOrder";
import BasicModal from "./BasicModal";
import Card from "@mui/material/Card";

export default function ConfirmOrder() {
  // this function displays the imformation as a last time for the user and after click shows a modal that confirms the order.
  const id = window.location.pathname.split("/")[2];
  return (
    <div className="card border-light mb-3" style={{ marginTop: "50px" }}>
      <h3>Recap</h3>
      <Card sx={{ minWidth: 175, boxShadow: "none" }}>
        <FetchOrder key={id} />
      </Card>
      <BasicModal id={id} />
    </div>
  );
}
