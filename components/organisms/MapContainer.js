import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import styles from "./MapContainer.module.scss";
import { TerrainMarker } from '../atoms';

const MapContainer = ({ lat, lng, terrains, selectedTerrain }) => {
	const [map, setMap] = useState(null);
	useEffect(() => {
		if(map){
			const { lat, lng } = selectedTerrain;
			map.panTo({ lat, lng});
		}
		return () => {}
	}, [selectedTerrain])

  	const markers = terrains?.map( t => {
		const { lat, lng, id } = t;
		return <TerrainMarker key={id} lat={lat} lng={lng} terrain={t} />
	});
	return (
		<div className={styles.map_container}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyCIMNBpLsjRfOebwkU9yO7SD9kGHfQeGRE' }}
				defaultCenter={{lat, lng}}
				defaultZoom={selectedTerrain ? 15 : 10}
				yesIWantToUseGoogleMapApiInternals
    			onGoogleApiLoaded={({ map }) => setMap(map)}>
				{markers}
			</GoogleMapReact>
		</div>
	);
}


const mapStateToProps = state => {
	const { selectedTerrain, terrains, coordinates } = state;
	const { lat, lng } = coordinates;
    return { selectedTerrain, terrains: Object.values(terrains), lat, lng };
}

export default connect(mapStateToProps, { })(MapContainer);