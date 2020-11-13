import React, { Fragment } from 'react';
import { Terrain } from '../../pages/api/spreadsheet';
import { TerrainCarousel, TerrainOfferCarousel } from '../molecules';

const TerrainSection = () => {
    return (
        <Fragment>
            <TerrainCarousel />
            <h3 className="ui header">Ofertas</h3>
            <TerrainOfferCarousel />
        </Fragment>
    )
}

export default TerrainSection;