import React from 'react';

const TerrainOfferCard = () => {
    const toTitleCase = phrase => {
        return phrase
            ? phrase
            .toLowerCase()
            .split(' ')
            .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ''))
            .join(' ')
            : '';
    }
    const formattedPrice = price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : NaN;
    return (
        <div
          className={`terrain item ${selected ? 'selected' : ''}`}
          onClick={() => onSelectTerrain(terrain)}>
          <div className="content">
            {!isNaN(price) && <h3 className="price">S/.{formattedPrice}</h3>}
            {!isNaN(area) && <div className="area">{area}m<sup>2</sup></div>}
            <a href={link || '#'} rel="noopener noreferrer" className="header" target="_blank">
              {projectName || 'Sin Nombre'}
            </a>
            <div className="description">
              <b>{toTitleCase(entity) || toTitleCase(contact)}</b>
            </div>
            <div className="address">
              <b>{toTitleCase(address) || 'Sin Calle'}</b>
            </div>
          </div>
        </div>
      );
}

export default TerrainOfferCard;