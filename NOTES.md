# Los tres principios de Redux

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

## Actions

Las **acciones** son un bloque de información que envía datos desde tu aplicación a tu store. Son la _única_ fuente de información para el store. Las envías al store usando **store.dispatch()**

```javascript
const ADD_TODO = 'ADD_TODO';
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

## Actions Creators

Los **creadores de acciones** son exactamente eso, funciones que crean acciones.

```javascript
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

## Dispath 

La función _dispatch_ es la encargada de _enviar_ las acciones al store.

```javascript
import * as actions from './actionsCreators';

store.dispatch(actions.increment());
store.dispatch(actions.addComment());
store.dispatch(actions.removeComment());
```

## Reducers

Las **acciones** describen que _algo pasó_, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.

```javascript
const addContact = (state, action) => {
  switch (action.type) {
    case 'NEW_CONTACT':
      return {
        ...state, contacts:
        [
          ...state.contacts, 
          action.payload
        ]
      }
    case 'UPDATE_CONTACT':
      return {
        // Handle contact update
      }
    case 'DELETE_CONTACT':
      return {
        // Handle contact delete
      }
    case 'EMPTY_CONTACT_LIST':
      return {
        // Handle contact list
      }
    default:
      return state
  }
}
```

Cuando una aplicación es muy grande, podemos dividir nuestros reducers en archivos separados y mantenerlos completamente independientes y controlando datos específicos.

```javascript
import { combineReducers } from 'redux';

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;
```

## Store

- Contiene el estado de la aplicación;
- Permite el acceso al estado vía ```getState()```;
- Permite que el estado sea actualizado vía ```dispatch(action)```;
- Registra los _listeners_ vía ```subscribe(listener)```;
- Maneja la anulación del registro de los _listeners_ vía el retorno de la función de ```subscribe(listener)```.

```javascript
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);
```