import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const destinationSlice = createSlice({
  name: "destination",
  initialState: [],
  reducers: {
    getAllDestinations: (destinations, action) => {
      const {payload} = action
      return payload
    }
  }
})

export const {getAllDestinations} = destinationSlice.actions
export const fetchAllDestinations = () => async dispatch => {
  const {data} = await httpConfig(`/apis/destinations/`)
  dispatch(getAllDestinations(data))
}
export default destinationSlice.reducer