import React from 'react';
import { connect } from 'react-redux';

import { Terrain } from  '../../pages/api/spreadsheet';
import { selectTerrain } from '../../actions';

const TerrainCard = ({ terrain, selectedTerrain, selectTerrain }: 
    { terrain: Terrain, selectedTerrain: Terrain, selectTerrain: (t: Terrain) => any }) => {
    return (
        <button 
            className={`ui ${terrain.id === selectedTerrain.id && 'primary'} button`}
            onClick={() => selectTerrain(terrain)}>
            {terrain.projectName}
        </button>
    )
}

const mapStateToProps = state => {
    const { selectedTerrain } = state;
    return { selectedTerrain };
}

export default connect(mapStateToProps, { selectTerrain })(TerrainCard);