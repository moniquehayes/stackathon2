import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk("quotes", async (category) => {
  try {
    const {data} = await axios({
        method: 'get',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': '7SGMSaVGEBdXc1AqaqoOhvWe6qVyZUsZy5WSy4yz'},
        contentType: 'application/json'
    });
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        pickedQuote: [],
        myQuotes: []
    },
    reducers: {
        addToQuotes: (state, action) => {
            state.myQuotes.push(action.payload);
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchQuotes.fulfilled, (state, action) => {
            state.pickedQuote = action.payload;
        })
    }
});

export const selectQuotes = (state) => state.quotes;

export const {addToQuotes} = quotesSlice.actions;

export default quotesSlice.reducer;
