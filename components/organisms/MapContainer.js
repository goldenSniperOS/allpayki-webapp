import React from 'react';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: new this.props.google.maps.LatLngBounds(),
      map: null,
      lat: this.props.lat,
      lng: this.props.long
    };
  }

  componentDidMount() {
    const { terrains } = this.props;
    const points = terrains
      .filter((t) => !isNaN(t.latitude) && !isNaN(t.longitude))
      .filter((t) => t.latitude !== null && t.longitude !== null)
      .map((t) => {
        return { lat: t.latitude, lng: t.longitude };
      });
    const bounds = new this.props.google.maps.LatLngBounds();
    console.log('points', points);
    for (const p of points) {
      bounds.extend(p);
    }
    this.setState({ bounds });
  }

  render() {
    const { lat, lng } = this.state;
    const { terrains } = this.props;
    const mapCenter = this.props.selectedTerrain
      ? {
          lat: this.props.selectedTerrain.latitude,
          lng: this.props.selectedTerrain.longitude
        }
      : { lat, lng };
    const markers = terrains
      .filter((t) => !isNaN(t.latitude) && !isNaN(t.longitude))
      .map((t) => {
        const icon = this.props.selectedTerrain
          ? this.props.selectedTerrain.id === t.id
            ? 'yellow'
            : 'red'
          : 'red';
        return (
          <Marker
            key={t.id}
            position={{ lat: t.latitude, lng: t.longitude }}
            title={t.projectName || 'Sin Nombre'}
            name={t.projectName || 'Sin Nombre'}
            icon={`http://maps.google.com/mapfiles/ms/icons/${icon}-dot.png`}
          />
        );
      });
    return (
      <Map
        google={this.props.google}
        zoom={this.props.selectedTerrain ? 15 : 13}
        streetViewControl={false}
        onReady={this.onReady}
        center={mapCenter}
        bounds={this.state.bounds}>
        {markers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCIMNBpLsjRfOebwkU9yO7SD9kGHfQeGRE'
})(MapContainer);
