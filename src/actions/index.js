export const UPDATE_QUERY = 'UPDATE_QUERY';
export const UPDATE_CONTENT = 'UPDATE_TEXT';
export const UPDATE_LIVENESS = 'UPDATE_LIVENESS';

export function queryUpdate(query) {
    return {
        type: UPDATE_QUERY,
        payload: query
    };
}

export function contentUpdate(content) {
    return {
        type: UPDATE_CONTENT,
        payload: content
    };
}

export function changeLiveness(liveness) {
    return {
        type: UPDATE_LIVENESS,
        payload: liveness
    }
}
