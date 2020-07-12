import api from "../api";
import {
  FETCH_MENU,
} from "./types";

export const fetchMenu = () => async dispatch => {
  const response = await api.get("/fma-core/menu-detail");
  dispatch({ type: FETCH_MENU, payload: response.data });
};
