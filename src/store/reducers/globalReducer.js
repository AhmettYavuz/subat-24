const initialState = {
  user: {
    name: "Anonim",
    age: 99,
  },
  title: "Hello Redux",
  description: "By by props",
};

export const globalReducer = (state = initialState, action) => {
  return state;
};
