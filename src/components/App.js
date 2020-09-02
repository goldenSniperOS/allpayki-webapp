import React from 'react';

import spreadsheetApi from '../api/spreadsheet';

import TerrainList from './TerrainList';
import MapContainer from './MapContainer';
import Spinner from './Spinner';

import './App.css'

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            terrains: [], 
            lat: null, 
            long: null, 
            message: "Cargando...", errorMessage: '',
            selectedTerrain: null
        }
    }
    

    async getUserGeolocation() {
        this.setState({ message: "Por favor active la ubicación..." });
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            (err) => this.setState({ errorMessage: err.message, message: err.message })
        );
    }

    async componentDidMount() {
        await this.getTerrains();
        await this.getUserGeolocation();
    }

    onSelectTerrain = async (terrain) => {
        this.setState({ selectedTerrain: terrain });
    }

    async getTerrains() {
        this.setState({ message: "Obteniendo terrenos..." })
        const terrains = await spreadsheetApi.getTerrainsData();
        this.setState({ terrains });
    }

    render () {
        const {lat, long, errorMessage, terrains, selectedTerrain} = this.state;
        if(lat && long && !errorMessage)
            return (
                <div className="ui stackable grid">
                    <div className="six wide column list-container">
                        <TerrainList 
                            terrains={terrains} 
                            onSelectTerrain={this.onSelectTerrain} 
                            selectedTerrain={selectedTerrain}
                        />
                    </div>
                    <div className="ten wide column map-container">
                        <MapContainer 
                            lat={lat} 
                            long={long} 
                            onSelectTerrain={this.onSelectTerrain} 
                            terrains={terrains} 
                            selectedTerrain={selectedTerrain}
                        />
                    </div>
                </div>
            );
        return <Spinner message={this.state.message}/>;
    }
}

export default App;