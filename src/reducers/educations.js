import { EDUCATION } from "../constants/actionTypes";
export default (state = {}, action) => {
  switch (action.type) {
    case EDUCATION:
      return {
        ...state,
        educationsData: action.payload,
        educationsLoad: true
      };
    default:
      return state;
  }
  return state;
};
