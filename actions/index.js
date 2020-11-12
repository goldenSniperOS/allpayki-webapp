import axios from 'axios';
const api = axios.create({baseURL: 'http://localhost:3000/api'})
import {FETCH_TERRAINS, SELECT_TERRAIN, SET_COORDINATES} from './types';

export const fetchTerrains = () => async dispatch => {
    const { data } = await api.get('/spreadsheet');
    dispatch({ type: FETCH_TERRAINS, payload: data.obj });
};

export const selectTerrain = terrain => {
    return { type: SELECT_TERRAIN, payload: terrain };
};

export const setCoordinates = (lat, lng) => {
    return { type: SET_COORDINATES, payload: { lat, lng } };
};