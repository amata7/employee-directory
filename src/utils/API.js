import axios from "axios";

const API = {
  search: function (query) {
    return axios.get("https://randomuser.me/api/");
  },
  url: "https://randomuser.me/api/",
};

export default API;
