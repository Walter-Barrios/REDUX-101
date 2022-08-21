const { createSlice, configureStore } = require("@reduxjs/toolkit");

//createSlice crea un reducer + un estado inicial + las actions relacionadas.

/*
estado global {
  todos: [],
}
*/

const toDosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      return state.filter((text, i) => i !== action.payload);
    },
  },
});

// toDosSlice {actions {addTodo, removeTodo}, reducer}

// accedemos a las actions mediante la propiedad .actions del reducer.
const { addTodo, removeTodo } = toDosSlice.actions;

// configureStore recibe un objeto con, entre otras cosas, el/los reducer/s.
const store = configureStore({
  reducer: {
    todos: toDosSlice.reducer,
  },
});

//de acá para abajo todo es igual
store.subscribe(() => {
  console.log("Subscription: ", store.getState());
});

store.dispatch(addTodo("Comprar pan"));
store.dispatch(addTodo("Correr"));
store.dispatch(removeTodo(1));
