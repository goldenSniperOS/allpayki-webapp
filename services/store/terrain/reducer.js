import constants from './constants';
const { FETCH_TERRAINS, SELECT_TERRAIN } = constants;
import _ from 'lodash';

const INITIAL_STATE = { terrains: [], terrain: {} };

export default function TerrainReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_TERRAINS:
            return { ...state, terrains: _.mapKeys(payload, "id") };
        case SELECT_TERRAIN:
            return { ...state, terrain: payload };
        default:
            return state;
    }
}
