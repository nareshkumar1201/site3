import { SHOW_ALERT, CLEAR_ALERT } from "../type";

import React from "react";

const AlertReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alerts: [action.payload],
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alerts: [],
      };
    default:
      return {
        state,
      };
  }
};

export default AlertReducer;
