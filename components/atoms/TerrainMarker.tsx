import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Terrain } from '../../pages/api/spreadsheet';
import { setTerrain } from '../../services/store/terrain/actions';

const TerrainMarker = ({ terrain }: { terrain: Terrain }) => {
    const { id, projectName } = terrain;
    const { terrain: currentTerrain } = useSelector((state) => state.terrain);
    const dispatch = useDispatch();

    const icon = currentTerrain?.id === id ? 'yellow' : 'red';
    return (
        <div onClick={() => dispatch(setTerrain(terrain))}>
            <i title={projectName} className={`${icon} large map marker icon`}></i>
        </div>
    );
};

export default TerrainMarker;
