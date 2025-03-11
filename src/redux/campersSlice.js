import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchOneCamper } from "./operation";
import { fetchFilters } from "./operation";

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
    detailCamper: {},
    loading: false,
    error: null,
  },
  reducers: {
    setFilters(state, action) {
      state.filters[action.payload.key] = action.payload.value;
    },
    clearFilters(state) {
      state.filters = {
        location: "",
        AC: false,
        transmission: "",
        kitchen: false,
        TV: false,
        bathroom: false,
        form: "",
      };
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
      .addCase(fetchFilters.pending, (state) => {
        state.loading = true;
        state.campers = [];
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchOneCamper.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOneCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.detailCamper = action.payload;
      })
      .addCase(fetchOneCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
export const { setFilters, clearFilters } = campersSlice.actions;
