import React from 'react';
import { Banner, Map, Tiles, MoreInformationForm } from "../components";

export default function PropertyPage() {
    return(
        <div className="page">
            <Banner />

            <div className="container">
                <Tiles />
            </div>

            <Map />

            <div className="container_2" style={{ gap: '1rem', padding: '0 2rem', marginBottom: '5rem' }}>
                <MoreInformationForm/>
            </div>
        </div>
    )
}
