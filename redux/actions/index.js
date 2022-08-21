const { 
  ADD_COUNT, 
  SET_COUNT, 
  ADD_NAME, 
  SET_NAME 
} = require("./actionTypes");

function addCount() {
  return {
    type: ADD_COUNT,
  };
}

function setCount(payload) {
  return {
    type: SET_COUNT,
    payload: payload || 0,
  };
}

function addName() {
  return {
    type: ADD_NAME,
  };
}

function setName(payload) {
  return {
    type: SET_NAME,
    payload: payload || "Sin Nombre",
  };
}
module.exports = {
  addCount,
  setCount,
  addName,
  setName,
};
