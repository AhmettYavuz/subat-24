const initialState = {
  user: {
    name: "",
    age: 0,
  },
  title: "Hello Redux",
  description: "By by props",
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
