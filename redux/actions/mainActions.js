import * as types from '../actionTypes';

export const setTick = (payload) => {
    return {
        type: types.TICK,
        payload
    };
};
