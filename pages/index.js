import { useEffect, useState } from 'react';
import { Spinner } from 'components/molecules';
import Home from 'scenes/Home';
import Head from 'next/head';
export default function Index({ terrains }) {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [message, setMessage] = useState('Cargando...');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const loadData = async () => {
    await getUserGeolocation();
  };

  const getUserGeolocation = async () => {
    setMessage('Por favor active la ubicación...');
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      },
      (err) => {
        setMessage(err.message);
        setErrorMessage(err.message);
      }
    );
  };

  if (lat && long && !errorMessage)
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
            integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
            crossorigin="anonymous"
          />
        </Head>
        <Home {...{ lat, long, terrains }} />;
      </>
    );
  return <Spinner message={message} />;
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/spreadsheet');
  const terrains = await res.json();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      terrains
    }
  };
}
