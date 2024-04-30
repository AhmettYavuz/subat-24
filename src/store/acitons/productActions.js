import { ProductActions } from "../reducers/productReducer";

export const setProductsActionCreator = (newProductList) => ({
  type: ProductActions.setProducts,
  payload: newProductList,
});
