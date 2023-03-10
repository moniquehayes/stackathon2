import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk("quotes", async (category) => {
  try {
  } catch (err) {
    console.error(err);
  }
});
