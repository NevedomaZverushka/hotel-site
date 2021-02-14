import React from 'react';
import { GridTiles, Filter } from "../components";

export default function GridPage() {
    return(
        <React.Fragment>
            <Filter />
            <div className="grid_page">
                <GridTiles />
            </div>
        </React.Fragment>
    )
}
