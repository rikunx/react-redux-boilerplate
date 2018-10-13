import { Ready } from './appActionTypes';

const defaultState = {
    ready: false,
    loadTime: new Date(),
    readyTime: null
};

function appReducer(state = defaultState, action) {
    switch (action.type) {
        case Ready:
            return {
                ...state,
                ready: true,
                readyTime: new Date()
            };
        default:
            return state;
    }
}

export default appReducer;
