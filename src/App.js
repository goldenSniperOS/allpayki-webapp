import React from 'react';

import spreadsheetApi from 'services/api/spreadsheet';

import {Spinner} from 'components/molecules';

import {Home} from 'scenes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terrains: [],
      lat: null,
      long: null,
      message: 'Cargando...',
      errorMessage: '',
      selectedTerrain: null,
    };
  }

  async getUserGeolocation() {
    this.setState({message: 'Por favor active la ubicación...'});
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({errorMessage: err.message, message: err.message}),
    );
  }

  async componentDidMount() {
    await this.getTerrains();
    await this.getUserGeolocation();
  }

  onSelectTerrain = async (terrain) => {
    this.setState({selectedTerrain: terrain});
  };

  async getTerrains() {
    this.setState({message: 'Obteniendo terrenos...'});
    const terrains = await spreadsheetApi.getTerrainsData();
    this.setState({terrains});
  }

  render() {
    const {lat, long, errorMessage} = this.state;
    if (lat && long && !errorMessage) return <Home {...this.state} />;
    return <Spinner message={this.state.message} />;
  }
}

export default App;
