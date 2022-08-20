const {
  ADD_COUNT,
  SET_COUNT,
  ADD_NAME,
  SET_NAME,
} = require("./../actions/actionTypes");

const initialState = {
  counter: 0,
  name: "Walter",
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_COUNT:
      return { ...state, counter: state.counter + 10 };
    case SET_COUNT:
      return { ...state, counter: payload };
    case ADD_NAME:
      return { ...state, name: state.name + '!' };
    case SET_NAME:
      return { ...state, name: payload };
    default:
      return state;
  }
}

module.exports = reducer;
