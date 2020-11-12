import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../components/atoms';
import { MapContainer, TerrainSection } from '../components/organisms';
import { fetchTerrains, setCoordinates } from '../actions';
import { Terrain } from './api/spreadsheet';

const Index = ({ lat, lng, terrains, fetchTerrains, setCoordinates }: 
	{lat: number, lng: number, terrains: Array<Terrain>, fetchTerrains: any, setCoordinates: any}) => {
	const [message, setMessage] = useState('Cargando Allpayki...');
	const [errorMessage, setErrorMessage] = useState('');

	const getUserGeolocation = async () : Promise<any> => {
		return new Promise((resolve, reject) => {
			window.navigator.geolocation.getCurrentPosition( 
				position => resolve({ lat: position?.coords?.latitude, lng: position?.coords?.longitude })
				, err => reject(err.message)
			);
		});
	};

	useEffect(() => {
		const initialLoading = async () => {
			try{
				setMessage('Por favor active la ubicación...');
				const { lat, lng } = await getUserGeolocation();
				setCoordinates(lat, lng);
				setMessage('Cargando Terrenos...');
				await fetchTerrains();
			} catch(e) {
				setMessage(e);
				setErrorMessage(e);
			}
		}
		initialLoading();
		return () => {};
	}, []);

	if (lat && lng && terrains.length > 0 && !errorMessage)
		return (
			<div className="ui container">
				<div className="ui grid">
					<div className="row"><TerrainSection /></div>
					<div className="row"><MapContainer /></div>
				</div>
			</div>
		);
	return <Spinner message={message} />;
}

const mapStateToProps = state => {
	const { terrains, coordinates } = state;
	const { lat, lng } = coordinates;
    return { terrains: Object.values(terrains), lat, lng };
}

export default connect(mapStateToProps, { setCoordinates, fetchTerrains })(Index);

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