import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}
// create a makeStore function
const makeStore = () => createStore(rootReducer, applyMiddleware(...middlewares));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: false });
