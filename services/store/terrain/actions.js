import constants from './constants';
import { getTerrains } from '../../api/terrain';

/**
 * Set terrains array
 *
 * @param {Array<Terrain>} terrains
 */

function updateTerrains(terrains) {
    return {
        type: constants.FETCH_TERRAINS,
        payload: terrains
    };
}

export const setTerrains = () => async (dispatch) => {
    const { data } = await getTerrains();
    dispatch(updateTerrains(data.obj));
};

/**
 * Select terrain object
 *
 * @param {Terrain} terrain
 */
const updateTerrain = (terrain) => {
    return {
        type: constants.SELECT_TERRAIN,
        payload: terrain
    };
};

export const setTerrain = (terrain) => async (dispatch) => {
    dispatch(updateTerrain(terrain));
};

/**
 * Set coords
 *
 * @param {Terrain} terrain
 */

const updateCoordinates = (payload) => {
    return {
        type: constants.SET_COORDINATES,
        payload
    };
};

export const setCoordinates = (lat, lng) => async (dispatch) => {
    dispatch(updateCoordinates({ lat, lng }));
};
