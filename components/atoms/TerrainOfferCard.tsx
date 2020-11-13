import React from 'react';
import styles from './TerrainOfferCard.module.scss';
import { TerrainOffer } from '../../pages/api/spreadsheet';

const TerrainOfferCard = ({ terrainOffer }: { terrainOffer: TerrainOffer }) => {
    const { price, area, situation, contact, charge, phone } = terrainOffer;
    const formattedPrice = price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : NaN;
    return (
        <div className={`ui card ${styles.terrainOfferCard}`}>
            <div className="content">
                <span className="right floated">
                    {situation}
                </span>
                <div className="header">{formattedPrice}</div>
                <div className="meta">
                    <span className="area">{area}</span>
                </div>
            </div>
            <div className="extra content">
                <a className="right floated">Detalles</a>
                <a href={`tel:${phone}`}>
                <i  title={charge}
                    className={`${ charge === 'Agente' ? 'suitcase' : 'user' } icon`}></i>
                {contact}
                </a>
            </div>
        </div>
    );
};

export default TerrainOfferCard;