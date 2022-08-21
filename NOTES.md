## Los tres principios de Redux

1. Única fuente de verdad

    El **estado** de toda tu aplicación se almacena dentro de un solo **store**.

    ```javascript
      console.log(store.getState());
      /* Prints
      {
        visibilityFilter: 'SHOW_ALL',
        todos: [
          {
            text: 'Consider using Redux',
            completed: true,
          },
          {
            text: 'Redux',
            completed: false,
          }
        ]
      }
      */
    ```


2. El estado es de sólo lectura

    La única manera de modificar el estado es emitiendo una **acción** - un objeto describiendo lo que pasó.

    ```javascript
    store.dispatch({
      type: 'COMPLETE_TODO',
      index: 1
    });

    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    });
    ```


3. Los cambios se aplican con funciones puras.

    Para especificar cómo el estado se transforma a partir de las acciones, escribimos **reducers** puros.

    ```javascript
    function visibilityFilter(state = 'SHOW_ALL', action) {
      switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
          return action.filter;
        default:
          return state;
      }
    }

    function todos(state = [], action) {
      switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            {
              text: action.text,
              completed: false
            }
          ]
        case 'COMPLETE_TODO':
          return state.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: true
              })
            }
            return todo;
          });
        default:
          return state;
      }
    }

    import { combineReducers, createStore } from 'redux';
    const reducer = combineReducers({ visibilityFilter, todos });
    const store = createStore(reducer);
    ```
