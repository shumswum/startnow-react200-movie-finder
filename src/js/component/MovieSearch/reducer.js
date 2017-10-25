import { types } from './action';

const defaultState = {
    input: '',
    searchData: []
};

export default function newSearch(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'CALL_FULFILLED': {
            return {
                ...state,
                searchData: payload.data.Search
            };
        }

        case types.NEW_INPUT: {
            return {
                ...state,
                input: payload
            };
        }

        default: {
            return state;
        }
    }
}