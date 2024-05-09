import { ProductActions } from "../reducers/productReducer";
import { API } from "../../api/api";

export const setProductsActionCreator = (newProductList) => ({
  type: ProductActions.setProducts,
  payload: newProductList,
});

export const getProductsAction = () => (dispatch, getState) => {
  console.log("getProductsAction ******** ", getState().global.user.name);

  API.get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products").then(
    (res) => {
      dispatch(setProductsActionCreator(res.data));
    }
  );
};
