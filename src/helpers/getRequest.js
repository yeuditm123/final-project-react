import axios from 'axios';
import { baseURL } from "./constants";

export default async function GetRequest(url) {

  return axios.get(
      `${baseURL}${url}`
  ).then((res) => {
      console.log(res);
      return res.data;
  })
      .catch((err) => {
          console.log(err);
          throw err;
      })
}
