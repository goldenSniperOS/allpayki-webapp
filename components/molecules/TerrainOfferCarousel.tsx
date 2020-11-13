import _ from 'lodash';
import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

import { Terrain } from '../../pages/api/spreadsheet';
import { TerrainOfferCard } from '../atoms';
import styles from './TerrainCarousel.module.scss';

const TerrainOfferCarousel = () => {
    const { terrain }: { terrain: Terrain } = useSelector((state) => state.terrain);

    const terrainOfferCards = terrain?.offers?.map((o) => {
        return <TerrainOfferCard key={o.id} terrainOffer={o} />;
    });

    return (
        <div className={styles.carousel}>
            <Slider
                infinite={false}
                speed={500}
                variableWidth={true}
                slideToShow={7}
                adaptiveHeight={true}>
                {terrainOfferCards}
            </Slider>
        </div>
    );
};

export default TerrainOfferCarousel;
