import React, { useContext, useEffect } from "react";
import ProposalContext from "../context/proposalFormContext/ProposalContext";
import AlertItems from "./AlertItems";
import Spinner from "./Spinner";
import AlertContext from "../context/alertContext/AlertContext";

const Alert = () => {
  const { errors, loading } = useContext(ProposalContext);
  const { alerts } = useContext(AlertContext);
  console.log(alerts);
  console.log(alerts.length);

  return (
    alerts.length > 0 &&
    alerts.map((alert) => <AlertItems key={alert.id} alerts={alert} />)
  );
};

export default Alert;
