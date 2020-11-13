import constants from './constants';
import _ from 'lodash';

const INITIAL_STATE = {
    terrains: [],
    terrain: {},

    /**
     * Coords of current map
     */
    lat: 0,
    lng: 0
};

export default function TerrainReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case constants.FETCH_TERRAINS: {
            return {
                ...state,
                terrains: [...payload]
            };
        }
        case constants.SELECT_TERRAIN: {
            return {
                ...state,
                terrain: payload
            };
        }
        case constants.SET_COORDINATES: {
            console.log(_.pick(payload, ['lat', 'lng']));
            return {
                ...state,
                ..._.pick(payload, ['lat', 'lng'])
            };
        }
        default:
            return state;
    }
}
