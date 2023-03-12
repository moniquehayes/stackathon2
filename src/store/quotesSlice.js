import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk("quotes", async (category) => {
  try {
    const {data} = await axios({
        method: 'get',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'zWBTjkyjS3P8g5OsjEqRuQ==wmpxhTk54lXRLDvp'},
    });
    return data;
  } catch (err) {
    console.error(err);
  }
});

const initialState = {
    pickedQuote: [],
    myQuotes: []
}

export const quotesSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(fetchQuotes.fulfilled, (state, action) => {
            state.pickedQuote = action.payload;
        })
    }
});

export const selectQuotes = (state) => state.quotes;

export default quotesSlice.reducer;
