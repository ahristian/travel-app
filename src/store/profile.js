import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"
import {fetchAuth} from "./auth";

const profileSlice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    getProfileById: (profile, action) => {
      const {payload} = action
      return payload
    }
  }
})
export const {getProfileById} = profileSlice.actions

export const fetchProfileById  = () => async (dispatch, getState)=> {
  await dispatch(fetchAuth())

  const {auth} = getState()
  if (auth!==null){
    const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`);
    dispatch(getProfileById(data))
  }
}
export default profileSlice.reducer