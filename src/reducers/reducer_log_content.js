import {UPDATE_CONTENT} from '../actions/index';

export default (state = null, action) => {
    // just updates the content
    switch (action.type) {
        case UPDATE_CONTENT:
            return action.payload;
    }

    // in case
    return state;
}
