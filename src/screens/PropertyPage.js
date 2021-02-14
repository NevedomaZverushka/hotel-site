import React from 'react';
import { Banner, Map, PropertyTiles } from "../components";

export default function PropertyPage() {
    return(
        <div className="property_page">
            <Banner />

            <div className="container">
                <PropertyTiles />
            </div>

            <Map />
        </div>
    )
}
