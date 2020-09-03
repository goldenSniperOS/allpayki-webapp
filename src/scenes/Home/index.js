import React from 'react';

import { TerrainList, MapContainer } from 'components/organisms';

import './style.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terrains: [],
      lat: props.lat,
      long: props.long,
      selectedTerrain: null,
    };
  }

  onSelectTerrain = async terrain => {
    this.setState({ selectedTerrain: terrain });
  };

  render() {
    const { terrains } = this.props;
    const { lat, long, selectedTerrain } = this.state;
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
  }
}

export default Home;
