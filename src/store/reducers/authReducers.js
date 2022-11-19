let initialState = {
  email: undefined,
  phoneNumber: undefined,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    case "setPhoneNumber":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
