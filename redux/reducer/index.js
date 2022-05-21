const { ADD_COUNT, SET_COUNT } = require('./../actions/actionTypes')

const initialState = {
    counter: 0,
    name: 'Walter'
}

function reducer( state = initialState, { type, payload } ) {
    switch(type) {
        case ADD_COUNT: return { ...state, counter: state.counter + 10 }
        case SET_COUNT: return { ...state, counter: payload }
        default: return state
    }
}

module.exports = reducer