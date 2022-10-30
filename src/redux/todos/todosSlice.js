import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const res = await fetch("http://localhost:7000/todos");
    return await res.json();
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            id: nanoid(6),
            title,
          },
        };
      },
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getTodosAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const selectItem = (state) => state.todos.items;

export const { addTodo, destroy, changeActiveFilter } = todosSlice.actions;
export default todosSlice.reducer;
