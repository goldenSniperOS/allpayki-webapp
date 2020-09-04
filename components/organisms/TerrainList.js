import React from 'react';

import { TerrainCard } from 'components/molecules';

class TerrainList extends React.Component {
  render() {
    const terrains = this.props.terrains.map((terrain) => {
      return (
        <TerrainCard
          key={terrain.id}
          terrain={terrain}
          onSelectTerrain={this.props.onSelectTerrain}
          selected={this.props.selectedTerrain && terrain.id === this.props.selectedTerrain.id}
        />
      );
    });
    return (
      <div className="ui middle aligned very relaxed divided selection list terrain-list">
        {terrains}
      </div>
    );
  }
}

export default TerrainList;
