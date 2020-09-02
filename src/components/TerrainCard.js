import React from 'react';
import './TerrainCard.css'

class TerrainCard extends React.Component {
    toTitleCase(phrase) {
        return phrase ? phrase.toLowerCase().split(" ").map(w => w ? w[0].toUpperCase() + w.slice(1) : "").join(" ") : "";
    }

    onClickTerrain = (e) => {
        this.props.onSelectTerrain(this.props.terrain);
    }

    render() {
        const { projectName, entity, contact, address, area, price, link } = this.props.terrain;
        console.log(this.props.terrain);
        const formattedPrice = price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : NaN;
        return (
            <div className={`terrain item ${this.props.selected ? 'selected' : ''}`} onClick={this.onClickTerrain}>
                <div className="content">
                    {!isNaN(price) && <h3 className="price">S/.{formattedPrice}</h3>}
                    {!isNaN(area) && <div className="area">{area}m2</div>}
                    <a href={link || '#'}  rel="noopener noreferrer" className="header" target="_blank">{projectName || "Sin Nombre"}</a>
                    <div className="description"><b>{this.toTitleCase(entity) || this.toTitleCase(contact)}</b></div>
                    <div className="address"><b>{this.toTitleCase(address) || "Sin Calle"}</b></div>
                </div>
            </div>
        );
    }
}

export default TerrainCard;