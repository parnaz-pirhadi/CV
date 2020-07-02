import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import menu from "./reducers/menu";
import common from "./reducers/common";
import experience from "./reducers/experience";
import scientific from "./reducers/scientific";
import educations from "./reducers/educations";
import books4 from "./reducers/books4";
import skills from "./reducers/skills";
import about from "./reducers/about";

export default combineReducers({
  menu,
  common,
  experience,
  scientific,
  educations,
  books4,
  skills,
  about,
  router: routerReducer
});
