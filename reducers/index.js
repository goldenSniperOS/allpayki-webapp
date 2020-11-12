import { combineReducers } from 'redux';
import { terrainReducer, selectedTerrainReducer } from './terrainReducer';
import coordinatesReducer from './coordinatesReducer';



export default combineReducers({
    terrains: terrainReducer,
    selectedTerrain: selectedTerrainReducer,
    coordinates: coordinatesReducer
});