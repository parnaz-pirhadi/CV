import { ABOUT } from "../constants/actionTypes";
export default (state = {}, action) => {
  switch (action.type) {
    case ABOUT:
      return {
        ...state,
        aboutData: action.payload,
        aboutLoad: true
      };
    default:
      return state;
  }
  return state;
};
