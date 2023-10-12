import axios, { AxiosRequestConfig } from "axios";
const baseURL = "https://api.staging.aca.so";

type TCallbackData = (response?: any, error?: any) => void;

export function post(data: any, callback: TCallbackData): void {
  const data_request = JSON.stringify(data);

  const config = {
    method: "post",
    url: `${baseURL}/auth/sign-up`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data_request,
  };

  send_request(config, callback);
}

function send_request(config: AxiosRequestConfig, callback: TCallbackData) {
  console.log("config", config);
  axios(config)
    .then((response) => {
      console.log("response: ", response);
      callback(response);
    })
    .catch((error) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      callback(undefined, error?.response?.data);
    });
}
