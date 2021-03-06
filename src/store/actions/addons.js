import api from "@/common/api";
import { ADDONS_LOADED, CLEAR_ADDONS } from "../types";
import { menuItemClicked } from "./global";

export const getAddons = () => {
  return async (dispatch, getState) => {
    try {
      const addons = await api.get("/addons");

      if (addons.data) {
        dispatch({
          type: ADDONS_LOADED,
          payload: addons.data
        });
      }
    } catch (err) {
      console.log(err);
    }

    dispatch(menuItemClicked({ loading: false, menuItem: null }));
  };
};

export const clearAddons = () => ({
  type: CLEAR_ADDONS,
  payload: []
});
