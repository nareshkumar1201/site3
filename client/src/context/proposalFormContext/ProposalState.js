import React, { useReducer } from "react";
import ProposalContext from "./ProposalContext";
import ProposalReducer from "./ProposalReducer";
import axios from "axios";

import {
  ADD_USER_DETAILS,
  ERROR_ADDING_USER,
  SET_LOADING,
  CLEAR_ALERTS_CONTEXT,
} from "../type";

const ProposalState = (props) => {
  const initialState = {
    loading: false,
    errors: null,
    userStatus: null,
  };

  const [state, dispatch] = useReducer(ProposalReducer, initialState);

  // add customer details

  const addCustomerInfo = async (custInfo) => {
    console.log(custInfo);
    setLoading();
    try {
      const res = await axios({
        url: "/cust",
        method: "POST",
        data: JSON.stringify(custInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data.status);
      dispatch({ type: ADD_USER_DETAILS, payload: res.data.status });
      setTimeout(() => {
        dispatch({ type: CLEAR_ALERTS_CONTEXT });
      }, 5000);
    } catch (err) {
      console.log("error response -client side", err.response.data.errors);
      dispatch({ type: ERROR_ADDING_USER, payload: err.response.data });
      setTimeout(() => {
        dispatch({ type: CLEAR_ALERTS_CONTEXT });
      }, 5000);
    }
  };

  const clearAlerts = () => {
    return {
      type: CLEAR_ALERTS_CONTEXT,
    };
  };

  const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };
  return (
    <ProposalContext.Provider
      value={{
        loading: state.loading,
        errors: state.errors,
        userStatus: state.userStatus,
        addCustomerInfo,
        clearAlerts,
      }}
    >
      {props.children}
    </ProposalContext.Provider>
  );
};

export default ProposalState;
