import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  schedule:null,
  details:{
    name:null,
    age:null
  }
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
    setName: (state,action)=>{
      state.details.name = action.payload;
    },
    setAge:(state,action)=>{
      state.details.age = action.payload;
    }
  },
});

export const {setLoading,setResponse,setName,setAge} = userSlice.actions;
export default userSlice.reducer;