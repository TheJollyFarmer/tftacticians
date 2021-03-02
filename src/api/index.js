import axios from "axios";
import store from "../store/index";

export default function request(type, route, payload) {
  return axios[type](route, payload)
    .then(response => {
      if (response.status === 200) return response.data;
    })
    .catch(e => {
      if (e.response) {
        console.log(e.response);
      } else if (e.request) {
        console.log(e.request);
      } else {
        console.log("Error", e.message);
      }

      store.dispatch("setErrors", e.response.data.errors);

      // return Promise.reject(e);
    });
}
