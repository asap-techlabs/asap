import CalcOrder from "./CalculateOrder";
import BasicModal from "./BasicModal";


export default function ConfirmOrder() {
// this function displays the imformation as a last time for the user and after click shows a modal that confirms the order.
  const id = window.location.pathname.split("/")[2];
  return (
    <div className="card border-light mb-3" style={{ marginTop: "50px" }}>
      <h3>Recap</h3>
      <CalcOrder key={id} />
      <BasicModal id={id} />
    </div>
  );
}
