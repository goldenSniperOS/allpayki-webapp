import React from 'react';
import { connect } from 'react-redux';
import styles from './TerrainCard.module.scss';
import { Terrain } from  '../../pages/api/spreadsheet';
import { selectTerrain } from '../../actions';

const TerrainCard = ({ terrain, selectedTerrain, selectTerrain }: 
    { terrain: Terrain, selectedTerrain: Terrain, selectTerrain: (t: Terrain) => any }) => {
    const { id, projectName, address } = terrain;
    const { selected, terrainCard, addressTitle } = styles;
    return (
        <div className={`ui  card ${terrainCard}`}
            onClick={() => selectTerrain(terrain)}>
            <div className="image"><img src="/image.png" /></div>
            <div className={`content ${id === selectedTerrain.id && selected }`}>
                <div className="header"><span>{projectName}</span></div>
                <div className="description">
                    {address ? 
                        <h5 className={addressTitle}><i className="map marker alternate icon"></i>{address}</h5> : 
                        <span>&nbsp;</span>}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    const { selectedTerrain } = state;
    return { selectedTerrain };
}
export default connect(mapStateToProps, { selectTerrain })(TerrainCard);