import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { ACCOUNT_API } from '../../helpers/consts';

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