import {UPDATE_QUERY} from '../actions/index';

export default (state = null, action) => {
    switch (action.type) {
        case UPDATE_QUERY:
            return action.payload;
    }

    return state;
}
