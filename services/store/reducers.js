import { combineReducers } from 'redux';
import TerrainReducer from './terrain/reducer';
import AppReducer from './app/reducer';

export default combineReducers({
    terrain: TerrainReducer,
    app: AppReducer
});
