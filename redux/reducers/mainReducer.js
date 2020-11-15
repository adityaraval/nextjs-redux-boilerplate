import { HYDRATE } from 'next-redux-wrapper';
import * as types from '../actionTypes';

const initialState = { tick: 'Initialized...' };

const main = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.main };

        case types.TICK:
            return { ...state, tick: action.payload };

        default:
            return state;
    }
};

export default main;
