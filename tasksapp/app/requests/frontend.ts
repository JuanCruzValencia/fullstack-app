import axios from "axios";

export const ClientRest = axios.create({
  baseURL: `${process.env.FRONTEND_URL}`,
});
