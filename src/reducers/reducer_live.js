import {UPDATE_LIVENESS} from '../actions/index';

export default (state = null, action) => {
    switch (action.type) {
        case UPDATE_LIVENESS:
            return action.payload;
    }

    return state;
}
