import { combineReducers } from 'redux';
import TerrainReducer from './terrain/reducer';

export default combineReducers({
    terrain: TerrainReducer
});
