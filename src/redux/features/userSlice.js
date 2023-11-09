import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  schedule:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setResponse: (state, action) => {
      state.schedule = action.payload;
      console.log(state)
    },
  },
});

export const {setLoading,setResponse} = userSlice.actions;
export default userSlice.reducer;