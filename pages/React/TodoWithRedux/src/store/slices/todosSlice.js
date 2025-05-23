import { createSlice } from "@reduxjs/toolkit";

const todoInitialValue = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: todoInitialValue,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleDoneTodo: (state, { payload }) => {
      state.list = state.list.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleDoneTodo } = todosSlice.actions;
export default todosSlice.reducer;
