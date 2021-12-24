import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const destinationsPhotoSlice = createSlice({
  name: "destinationsPhotos",
  initialState: [],
  reducers: {
    getAllDestinationPhotos: (destinationsPhotos, action) => {
      const {payload} = action
      return payload
    }
  }
})

export const {getAllDestinationPhotos} = destinationsPhotoSlice.actions
export const fetchDestinationPhotosByDestinationId = (destinationId) => async dispatch => {
  const {data} = await httpConfig(`/apis/destinations/${destinationId}`);
  dispatch(getAllDestinationPhotos(data))
}
export default destinationsPhotoSlice.reducer