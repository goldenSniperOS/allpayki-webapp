import constants from './constants';
const { SET_COORDINATES } = constants;

/**
 * Set coords
 *
 * @param {Number} lat
 * @param {Number} lng
 */

const updateCoordinates = (payload) => {
    return { type: SET_COORDINATES, payload };
};

export const setCoordinates = (lat, lng) => async (dispatch) => {
    dispatch(updateCoordinates({ lat, lng }));
};
