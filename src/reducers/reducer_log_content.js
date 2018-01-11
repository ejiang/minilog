import {UPDATE_CONTENT} from '../actions/index';
import {apache_log} from '../containers/sample_buttons';

export default (state = apache_log, action) => {
    // just updates the content
    switch (action.type) {
        case UPDATE_CONTENT:
            return action.payload;
    }

    // in case
    return state;
}
