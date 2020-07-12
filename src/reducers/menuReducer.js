import { FETCH_MENU } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
