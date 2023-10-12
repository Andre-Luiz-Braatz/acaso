import axios, { AxiosRequestConfig } from "axios";
const baseURL = "https://api.staging.aca.so";
const token = "andre";

type TCallbackData = (response?: any, error?: any) => void;

export function post(data: any, callback: TCallbackData): void {
  const data_request = JSON.stringify(data);

  const config = {
    method: "post",
    url: `${baseURL}/auth/sign-up`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data_request,
  };

  send_request(config, callback);
}

function send_request(config: AxiosRequestConfig, callback: TCallbackData) {
  axios(config)
    .then((response) => {
      console.log("response: ", response);
      callback(response);
    })
    .catch((error) => {
      console.log("error: ", error);
      callback(undefined, error);
    });
}
