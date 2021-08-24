import {createStore} from 'redux';

import reducers from './reducer';

export default createStore(reducers);

export {default as addTodo} from './actions/todo'