const store = require("./redux/store");

const { addCount, setCount, addName, setName } = require("./redux/actions");

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addCount());
store.dispatch(setCount(50));
store.dispatch(addCount());
store.dispatch(addCount());

store.dispatch(setName("Julian"));
store.dispatch(addName());
store.dispatch(addName("Jazmin"));
store.dispatch(addName());
