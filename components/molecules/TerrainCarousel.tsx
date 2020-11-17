import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

import { Terrain } from '../../pages/api/spreadsheet';
import { TerrainCard } from '../atoms';
import styles from './TerrainCarousel.module.scss';

const TerrainCarousel = () => {
    const {
        terrains,
        terrain
    }: {
        terrains: Array<Terrain>;
        terrain: Terrain;
    } = useSelector((state) => {
        const { terrains, terrain } = state.terrain;
        return { terrains: Object.values(terrains), terrain };
    });
    const slider = React.createRef<Slider>();

    useEffect(() => {
        slider.current.slickGoTo(terrains.findIndex((t) => t.id === terrain.id));
    }, [terrain]);

    const terrainCards = terrains?.map((t) => {
        return <TerrainCard key={t.id} terrain={t} />;
    });

    return (
        <div className={styles.carousel}>
            <Slider
                ref={slider}
                infinite={false}
                speed={500}
                variableWidth={true}
                slideToShow={7}
                adaptiveHeight={true}>
                {terrainCards}
            </Slider>
        </div>
    );
};

export default TerrainCarousel;
