import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './TerrainCard.module.scss';
import { Terrain } from '../../pages/api/spreadsheet';
import { setTerrain } from '../../services/store/terrain/actions';

const TerrainCard = ({ terrain }: { terrain: Terrain }) => {
    const { terrain: currentTerrain } = useSelector((state) => state.terrain);
    const { id, projectName, address } = terrain;
    const { selected, terrainCard, addressTitle } = styles;
    const dispatch = useDispatch();

    return (
        <div className={`ui  card ${terrainCard}`} onClick={() => dispatch(setTerrain(terrain))}>
            <div className="image">
                <img src="/image.png" />
            </div>
            <div className={`content ${id === currentTerrain.id && selected}`}>
                <div className="header">
                    <span>{projectName}</span>
                </div>
                <div className="description">
                    {address ? (
                        <h5 className={addressTitle}>
                            <i className="map marker alternate icon"></i>
                            {address}
                        </h5>
                    ) : (
                        <span>&nbsp;</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TerrainCard;
