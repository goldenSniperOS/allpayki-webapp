import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from '../components/atoms';
import { MapContainer, TerrainSection } from '../components/organisms';

import { Terrain } from './api/spreadsheet';
import { setTerrains, setCoordinates } from '../services/store/terrain/actions';

import { getUserGeolocation } from '../utils';

const Index = () => {
    const {
        lat,
        lng,
        terrains
    }: {
        lat: number;
        lng: number;
        terrains: Array<Terrain>;
    } = useSelector((state) => state.terrain);
    const dispatch = useDispatch();

    const [message, setMessage] = useState('Cargando Allpayki...');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const initialLoading = async () => {
            try {
                setMessage('Por favor active la ubicación...');
                const { lat, lng } = await getUserGeolocation();
                dispatch(setCoordinates(lat, lng));
                setMessage('Cargando Terrenos...');
                await dispatch(setTerrains());
            } catch (e) {
                setMessage(e);
                setErrorMessage(e);
            }
        };
        initialLoading();
        return () => {};
    }, []);

    if (lat && lng && terrains.length > 0 && !errorMessage)
        return (
            <div className="ui container">
                <div className="ui grid">
                    <div className="row">
                        <TerrainSection />
                    </div>
                    <div className="row">
                        <MapContainer />
                    </div>
                </div>
            </div>
        );
    return <Spinner message={message} />;
};

const mapStateToProps = (state) => {
    const { terrains, coordinates } = state;
    const { lat, lng } = coordinates;
    return { terrains: Object.values(terrains), lat, lng };
};

export default Index;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
/*export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/spreadsheet');
  const resJSON = await res.json();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return { props: { terrains: resJSON.obj } };
}*/
