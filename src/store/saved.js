import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const savedSlice = createSlice({
  name: "save",
  initialState: [],
  reducers: {
    getSaveByProfileId: (save, action) => {
      const {payload} = action
      return payload
    }
  }
})
export const {getSaveByProfileId} = savedSlice.actions
export const fetchSaveByProfileId = (profileId) => async dispatch => {
  const {data} = await httpConfig(`/apis/save/${profileId}`);
  dispatch(getSaveByProfileId(data))
}

export default savedSlice.reducer