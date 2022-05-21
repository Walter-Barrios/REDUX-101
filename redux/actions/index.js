const { ADD_COUNT, SET_COUNT } = require('./actionTypes')

function addCount() {
    return {
        type: ADD_COUNT
    }
}

function setCount( payload ) {
    return {
        type: SET_COUNT,
        payload: payload || 0
    }
}

module.exports = {
    addCount,
    setCount
}