import React from 'react';
import { connect } from 'react-redux';

import { Terrain } from  '../../pages/api/spreadsheet';
import { selectTerrain } from '../../actions';

const TerrainMarker = ({ terrain, selectedTerrain, selectTerrain }: 
    { terrain: Terrain, selectedTerrain: Terrain, selectTerrain: any }) => {
    const { id, projectName } = terrain;
    const icon = selectedTerrain?.id === id ? 'yellow' : 'red';
    return (
        <div
            onClick={() => selectTerrain(terrain)}>
            <i title={projectName} className={`${icon} large map marker icon`}></i>
        </div>
    )
}

const mapStateToProps = state => {
    const { selectedTerrain } = state;
    return { selectedTerrain };
}

export default connect(mapStateToProps, { selectTerrain })(TerrainMarker);