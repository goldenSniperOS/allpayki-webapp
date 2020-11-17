import constants from './constants';
const { FETCH_TERRAINS, SELECT_TERRAIN } = constants;
import { getTerrains } from '../../api/terrain';

/**
 * Set terrains array
 *
 * @param {Array<Terrain>} terrains
 */

function updateTerrains(terrains) {
    return { type: FETCH_TERRAINS, payload: terrains };
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
    return { type: SELECT_TERRAIN, payload: terrain };
};

export const setTerrain = (terrain) => async (dispatch) => {
    dispatch(updateTerrain(terrain));
};
