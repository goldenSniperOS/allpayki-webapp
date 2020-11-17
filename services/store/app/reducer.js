import constants from './constants';
const { SET_COORDINATES } = constants;
import _ from 'lodash';

const INITIAL_STATE = { lat: 0, lng: 0 };

export default function AppReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_COORDINATES:
            return { ...state, ..._.pick(payload, ['lat', 'lng']) };
        default:
            return state;
    }
}
