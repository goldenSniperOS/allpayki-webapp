import React from 'react';
import Slider from "react-slick";
import { Terrain } from '../../pages/api/spreadsheet';
import { connect } from 'react-redux';
import { TerrainCard } from '../atoms'
import styles from './TerrainCarousel.module.scss';

const TerrainCarousel = ({ terrains, selectedTerrain }: 
  	{ terrains: Array<Terrain>, selectedTerrain: Terrain }) => {
	const terrainCards = terrains?.map( t => {
		return <TerrainCard key={t.id} terrain={t} />
	});
	return (
		<div className={styles.carousel}>
			<Slider 
				infinite={false}
				speed={500}
				variableWidth={true}
				slideToShow={7}
                adaptiveHeight={true}>
				{terrainCards}
			</Slider>
		</div>
	);
}

const mapStateToProps = state => {
	const { selectedTerrain, terrains } = state;
    return { selectedTerrain, terrains: Object.values(terrains) };
}

export default connect(mapStateToProps, { })(TerrainCarousel);