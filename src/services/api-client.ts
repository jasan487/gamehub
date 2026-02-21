import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b46d3901de7d41659efc1ac7adbf4341",
  },
});
