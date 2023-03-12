1. Add MyQuotes slice & component
    - when link is clicked, add the quote to it
    ****IF TIME - added work at bottom of this doc






6. edit readme

7. render & film


slice: 
export const addToMyQuotes = createAsyncThunk("myquotes", async (quote, author) => {
    try {
        const {data} = await axios.post('/myquotes', {
            quote, 
            author,
        });
        return data;
    } catch(err) {
        console.error(err)
    }
})

const initialState = {
    pickedQuote: [],
    myQuotes: []
}

        builder.addCase(addToMyQuotes.fulfilled, (state, action) => {
            state.myQuotes.push(action.payload);
        })



home.js

  const quote = myPickedQuote.quote;
  const author = myPickedQuote.author;



  const handleAdd = async (evt) => {
    evt.preventDefault();
    await dispatch(addToMyQuotes({quote, author}));
    // setQuote('');
    // setAuthor('');
  }

  Link onClick={handleAdd}