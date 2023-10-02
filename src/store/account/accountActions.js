import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";
import { addDataToLocalStorage } from "../../helpers/functions";

export const registerAccount = createAsyncThunk(
  "account/registerAccount",
  async ({ user, navigate }) => {
    const accountData = new FormData();
    accountData.append("username", user.username);
    accountData.append("password", user.password);
    const res = await axios.post(`${ACCOUNT_API}/register/`, accountData);
    console.log(res);
    return { navigate };
  }
);

// const data = addDataToLocalStorage;

export const loginAccount = createAsyncThunk(
  "account/loginAccount",
  async ({ user, navigate }) => {
    const accountData = new FormData();
    accountData.append("username", user.username);
    accountData.append("password", user.password);
    const { data } = await axios.post(`${ACCOUNT_API}/api/token/`, accountData);
    return { data, navigate, user: user.username };
    // return { navigate, user: user.username };
  }
);
