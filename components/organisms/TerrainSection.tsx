import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Terrain } from '../../pages/api/spreadsheet';
import { TerrainCarousel } from '../molecules';

const TerrainSection = ({ terrains, selectedTerrain }: 
    { terrains: Array<Terrain>, selectedTerrain: Terrain }) => {
    return (
        <Fragment>
            <TerrainCarousel />
            <h3 className="ui header">{selectedTerrain.projectName}</h3>
        </Fragment>
    )
}


const mapStateToProps = state => {
	const { selectedTerrain, terrains } = state;
    return { selectedTerrain, terrains: Object.values(terrains) };
}

export default connect(mapStateToProps, { })(TerrainSection);