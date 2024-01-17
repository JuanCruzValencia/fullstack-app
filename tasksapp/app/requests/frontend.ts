import axios from "axios";

export const ClientRest = axios.create({
  baseURL: `${process.env.NEXT_API_URL || ""}/api`,
});
