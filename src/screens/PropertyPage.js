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
        </div>
    )
}
