import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit'
import {api, store} from '../../index'
import {APIRoutes} from '../../consts'

export const fetchExperts = createAsyncThunk('data/fetchExperts',
  async () => {
    const data = await api.post(APIRoutes.Experts, {expertId: 2});
    return [data.data, data.data, data.data, data.data, data.data];
  })


const initialState = {
  experts: [],
  voteStatus: 'started',
  isLoading: false,
  userStatus: undefined,
}

const dataReducer = createSlice({
  name: 'DATA',
  initialState,
  reducers: {
    setUserStatus: (state, action) => {
      state.userStatus = action.payload
    },
    setVoteStatus: (state, action) => {
      state.voteStatus = action.payload
    },
  },

  extraReducers: (builder) => builder
    .addCase(fetchExperts.pending, (state, action) => {
      state.isLoading = true
    })
    .addCase(fetchExperts.fulfilled, (state, action) => {
      state.experts = action.payload
      state.isLoading = false
    })
    .addCase(fetchExperts.rejected, (state, action) => {
      console.log('fetching error ')
      state.isLoading = false
    })
})

export const {
  setUserStatus,
  setVoteStatus,
} = dataReducer.actions

export default dataReducer.reducer


export const selectExperts = (state) => state.DATA.experts
export const selectIsLoading = (state) => state.DATA.isLoading

