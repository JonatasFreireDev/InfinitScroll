import axios from "axios";

export const api = axios.create({
  baseURL: "https://stormy-shelf-93141.herokuapp.com/",
});
