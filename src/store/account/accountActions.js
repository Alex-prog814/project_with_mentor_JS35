import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCOUNT_API } from "../../helpers/consts";
import axios from "axios";

export const registerAccount = createAsyncThunk(
    'account/registerAccount',
    async ({ user, navigate }) => {
        const accountData = new FormData();
        accountData.append('username', user.username);
        accountData.append('password', user.password);
        const res = await axios.post(`${ACCOUNT_API}/register/`, accountData);
        console.log(res);
        return { navigate };
    }
);

export const loginAccount = createAsyncThunk(
    'account/loginAccount',
    async ({ user, navigate }) => {
        const accountData = new FormData();
        accountData.append('username', user.username);
        accountData.append('password', user.password);
        const { data } = await axios.post(`${ACCOUNT_API}/api/token/`, accountData);
        return { data, navigate, user: user.username };
    }
);