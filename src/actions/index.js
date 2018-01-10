export const UPDATE_TEXT = 'UPDATE_TEXT';

export function parse(query) {
    return {
        type: UPDATE_TEXT,
        payload: query
    };
}
