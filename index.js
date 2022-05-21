const store = require('./redux/store')

const { addCount, setCount } = require('./redux/actions')

store.subscribe( () => {
    console.log(store.getState())
})

store.dispatch(addCount())
store.dispatch(setCount(50))
store.dispatch(addCount())
store.dispatch(addCount())
