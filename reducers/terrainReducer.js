import _ from 'lodash';
import {FETCH_TERRAINS, SELECT_TERRAIN} from '../actions/types';

 //Object-based
export const terrainReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch(type) {
        case FETCH_TERRAINS: return { ..._.mapKeys(payload, 'id') }
        default: return state;
    }
}

export const selectedTerrainReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch(type) {
        case SELECT_TERRAIN: return { ...state, ...payload };
        default: return state;
    }
}