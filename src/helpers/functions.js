import axios from "axios";
import { ACCOUNT_API } from "./consts";

export const addDataToLocalStorage = (user, tokens) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("tokens", JSON.stringify(tokens));
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("tokens");
};

export const checkUserLogin = () => {
  const user = localStorage.getItem("user");
  if (!user) return false;
  return true;
};

export const updateToken = () => {
  let updateFunc = setInterval(async () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens) return clearInterval(updateFunc);
    const Authorization = `Bearer ${tokens.access}`;
    const { data } = await axios.post(
      `${ACCOUNT_API}/api/token/refresh/`,
      { refresh: tokens.refresh },
      { headers: { Authorization } }
    );
    localStorage.setItem(
      "tokens",
      JSON.stringify({ refresh: tokens.refresh, access: data.access })
    );
  }, 1000 * 60 * 9);
};
