/*
import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const activationSlice = createSlice({
  name: "profileActivationToken",
  initialState: [],
  reducers: {
    getActivation: (profileActivationToken, action) => {
      const {payload} = action
      return payload
    }
  }
})

export const { getActivation} = activationSlice.actions
export const fetchActivation = (profileActivationToken) => async dispatch => {
  const {data} = await httpConfig(`/apis/sign-up/activation/${profileActivationToken}`);
  dispatch(getActivation(data))
}
export default activationSlice.reducer*/
