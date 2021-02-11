import React from 'react';
import { map } from '../assets/images';

export default function Map() {
    return(
        <div className="column map_container" style={{  }}>
            <h2>Map</h2>
            <div className="map" style={{ background: `url(${map})` }} />
        </div>
    );
}
