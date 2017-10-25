export const types = {
    CALL: 'CALL',
    NEW_INPUT: 'NEW_INPUT'   
}

export function newCall(data) {
    return {
        type: 'CALL',
        payload: data
    }
}

export function newInput(input) {
    return {
        type: 'NEW_INPUT',
        payload: input
    }
}