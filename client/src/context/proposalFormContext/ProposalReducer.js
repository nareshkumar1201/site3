import {
  ADD_USER_DETAILS,
  ERROR_ADDING_USER,
  SET_LOADING,
  CLEAR_ALERTS_CONTEXT,
} from "../type";

const ProposalReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER_DETAILS:
      return {
        ...state,
        userStatus: action.payload,
        loading: false,
        errors: null,
      };
    case ERROR_ADDING_USER:
      return {
        ...state,
        errors: action.payload,
        userStatus: null,
        loading: false,
      };
    case CLEAR_ALERTS_CONTEXT: {
      return {
        ...state,
        errors: null,
        userStatus: null,
        loading: false,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return {
        state,
      };
  }
};

export default ProposalReducer;
