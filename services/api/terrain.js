import apiIntance from './apiIntence';

export const getTerrains = () => apiIntance.get('/spreadsheet');
