import superagentPromise from "superagent-promise";
import _superagent from "superagent";
import { KJUR } from "jsrsasign";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = process.env.PUBLIC_URL + "/rest/api";

const encode = encodeURIComponent;
const responseBody = (res) => res.body.body;

var jwt = require("jsonwebtoken");
const secretKey = "secret";

const payload = {
  sub: "1234567890",
  name: "John Doe",
  iat: 1516239022,
};
const header = {
  alg: "HS256",
  typ: "JWT",
};
const token = jwt.sign(payload, secretKey, {
  algorithm: "HS256",
});
//baraye set kardan dar cookie
// document.cookie = token;

localStorage.setItem("currentUser", token);

// document.cookie = KJUR.crypto.Util.sha256Hex("parnaz,pirhadi");

// localStorage.setItem(
//   "currentUser",
//   KJUR.crypto.Util.sha256Hex("parnaz,pirhadi")
// );

const requests = {
  del: (url) => superagent.del(`${API_ROOT}${url}`).then(responseBody),
  get: (url) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .set("Authorization", `${localStorage.getItem("currentUser")}`),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).then(responseBody).set,
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
};
const navigation = {
  getMenu: () => {
    return requests.get("/menu.json");
  },
};
const experience = {
  getExperience: () => {
    return requests.get("/experience.json");
  },
};
const scientific = {
  getScientific: () => {
    return requests.get("/scientific.json");
  },
};
const educations = {
  getEducations: () => {
    return requests.get("/education.json");
  },
};
const books = {
  getBooks: () => {
    return requests.get("/books.json");
  },
};
const skills = {
  getskills: () => {
    return requests.get("/skills.json");
  },
};
const about = {
  getabout: () => {
    return requests.get("/aboutme.json");
  },
};

export default {
  navigation,
  experience,
  scientific,
  educations,
  skills,
  books,
  about,
};
