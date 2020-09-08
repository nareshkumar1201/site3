import React, { Fragment } from "react";

const AlertItems = ({ alerts }) => {
  console.log(alerts);
  const { msg, type } = alerts;
  return (
    <Fragment>
      <div className={`alertItem ${type}`}>
        <h1>{msg}</h1>
      </div>
    </Fragment>
  );
};

export default AlertItems;
