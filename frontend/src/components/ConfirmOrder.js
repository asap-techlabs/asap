import React from "react";
import FetchOrder from "./FetchOrder";
import BasicModal from "./BasicModal";
import Card from "@mui/material/Card";import Navbar from "./Navbar.js";


export default function ConfirmOrder() {
  // this function displays the imformation as a last time for the user and after click shows a modal that confirms the order.
  const id = window.location.pathname.split("/")[2];
  return (
    <div className="page-container">
      <Navbar />
      <div
        className="card border-light mb-0"
        style={{
          marginTop: "50px",
          maxWidth: 450,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h3>Recap</h3>
        <Card sx={{ minWidth: 450, boxShadow: "none" }}>
          <FetchOrder key={id} />
        </Card>
        <BasicModal id={id} />
      </div>
    </div>
  );
}
