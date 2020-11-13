import _ from 'lodash';
import React from 'react';
import Slider from "react-slick";
import { Terrain } from '../../pages/api/spreadsheet';
import { connect } from 'react-redux';
import { TerrainOfferCard } from '../atoms'
import styles from './TerrainCarousel.module.scss';

const TerrainOfferCarousel = ({ selectedTerrain }:{ selectedTerrain: Terrain }) => {
	const terrainOfferCards = selectedTerrain?.offers?.map( o => {
		return <TerrainOfferCard key={o.id} terrainOffer={o} />
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
}

const mapStateToProps = state => {
	const { selectedTerrain } = state;
    return { selectedTerrain };
}

export default connect(mapStateToProps, { })(TerrainOfferCarousel);