import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operation";
import { fetchServerFilters } from "./operation";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    favorite: [],
    filters: {
      location: "",
      AC: false,
      transmission: "",
      kitchen: false,
      TV: false,
      bathroom: false,
      form: "",
    },
    campers: [],
    loading: false,
    error: null,
  },
  reducers: {
    setFilters(state, action) {
      state.filters[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = [...state.campers, ...action.payload];
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchServerFilters.pending, (state) => {
        state.loading = true;
        state.campers = [];
      })
      .addCase(fetchServerFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload;
      })
      .addCase(fetchServerFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
