import AlertContext from "./AlertContext";
import React, { useReducer } from "react";
import AlertReducer from "./AlertReducer";
import { SHOW_ALERT, CLEAR_ALERT } from "../type";
import { v4 as uuid } from "uuid";

const AlertState = (props) => {
  const initialState = {
    alerts: [],
  };

  const showAlert = (msg, type, timeout = 5000) => {
    const id = uuid();
    console.log(`this is msg ${msg} this is type ${type}`);
    dispatch({ type: SHOW_ALERT, payload: { msg, type, id } });

    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, timeout);
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);
  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
