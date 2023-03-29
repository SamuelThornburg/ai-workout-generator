import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export default api;
/* This file creates an instance of the axios HTTP client with a predefined base URL,
 making it easier to interact with the server from the client side
 */
