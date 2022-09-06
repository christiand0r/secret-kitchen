import axios from "axios";

const newsletterApi = axios.create({
  baseURL: "https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter",
  headers: {
    "Content-Type": "application/json",
  },
  data: {
    name: "",
    lastname: "",
    email: "",
    phone: "",
  },
});

export default newsletterApi;
