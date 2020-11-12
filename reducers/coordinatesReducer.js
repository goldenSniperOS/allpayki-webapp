import _ from 'lodash';
import {SET_COORDINATES} from '../actions/types';

const coordinatesReducer = (state = { lat: 0, lng: 0 }, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_COORDINATES: return _.pick(payload,['lat', 'lng']);
        default: return state;
    }
}

export default coordinatesReducer;