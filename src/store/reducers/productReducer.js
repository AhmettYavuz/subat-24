const initialState = [];

export const ProductActions = {
  setProducts: "SET_PRODUCTS",
  addProduct: "ADD_PRODUCT",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.setProducts:
      return [...action.payload];

    case ProductActions.addProduct:
      return [...state, action.payload];

    default:
      return state;
  }
};
