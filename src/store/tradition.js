import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const traditionSlice = createSlice({
  name: "tradition",
  initialState: [],
  reducers: {
    getAllTraditions: (traditions, action) => {
      const {payload} = action
      return payload
    }
  }
})
export const {getAllTraditions} = traditionSlice.actions
export const fetchAllTraditions = () => async dispatch => {
  const {data} = await httpConfig(`/apis/traditions/`)
  dispatch(getAllTraditions(data))
}
export default traditionSlice.reducer