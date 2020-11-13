import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import styles from './MapContainer.module.scss';
import { TerrainMarker } from '../atoms';

const MapContainer = () => {
    const { lat, lng, terrains, terrain } = useSelector((state) => state.terrain);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map) {
            const { lat, lng } = terrain;
            map.panTo({ lat, lng });
        }
        return () => {};
    }, [terrain]);

    const markers = Object.values(terrains)?.map((t) => {
        const { lat, lng, id } = t;
        return <TerrainMarker key={id} lat={lat} lng={lng} terrain={t} />;
    });

    return (
        <div className={styles.map_container}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCIMNBpLsjRfOebwkU9yO7SD9kGHfQeGRE' }}
                defaultCenter={{ lat, lng }}
                defaultZoom={terrain ? 15 : 10}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map }) => setMap(map)}>
                {markers}
            </GoogleMapReact>
        </div>
    );
};

export default MapContainer;
