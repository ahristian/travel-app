import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

const foodSlice = createSlice({
  name: "food",
  initialState: [],
  reducers: {
    getAllFoods: (foods, action) => {
      const {payload} = action
      return payload
    }
  }
})
export const {getAllFoods} = foodSlice.actions
export const fetchAllFoods = () => async dispatch => {
  const {data} = await httpConfig(`/apis/foods/`)
  dispatch(getAllFoods(data))
}
export default foodSlice.reducer