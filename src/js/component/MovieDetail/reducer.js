const defaultState = {
    detailData: {}
}

export default function detailScreen(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'DETAIL_CALL_FULFILLED': {
            return {
                ...state,
                detailData: payload.data
            }
        }

        default: {
            return state;
        }
    }
}