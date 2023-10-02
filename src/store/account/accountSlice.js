import { createSlice } from "@reduxjs/toolkit";
import { registerAccount, loginAccount } from "./accountActions";
import { addDataToLocalStorage } from "../../helpers/functions";
const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: null,
    loading: false,
    status: "",
  },
  reducers: {
    clearStatusState: (state) => {
      state.status = "";
    },
    clearUserState: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAccount.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.navigate("/login");
      })
      .addCase(registerAccount.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(loginAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        addDataToLocalStorage(action.payload.user, action.payload.data);
        action.payload.navigate("/");
      })
      .addCase(loginAccount.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      });
  },
});

export const { clearStatusState, clearUserState } = accountSlice.actions;
export default accountSlice.reducer;
