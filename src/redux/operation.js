import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await api.get("/campers");
      console.log(response.data.items);
      return response.data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
