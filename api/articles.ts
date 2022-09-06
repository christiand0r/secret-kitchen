import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles",
  params: {
    filter: "",
  },
});

export default articlesApi;
