import api from "@/configs/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersList = createAsyncThunk(
  "user/get-users-list",
  async () => {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      return null;
    }
  }
);
