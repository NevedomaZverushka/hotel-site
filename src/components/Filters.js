import React from 'react';
import { Input, Switch } from "./index";

export default function Filters() {
    const [moreFiltersOpen, setMoreFiltersOpen] = React.useState(false);

    return(
        <div className={`filters ${moreFiltersOpen ? "" : "shadow"} column`}>
            <div className="row">
                <div className="inputs" style={{ flex: 0.5 }}>
                    <Input containerStyle={{ border: "none" }} />
                    <Input containerStyle={{ border: "none" }} />
                    <Input containerStyle={{ border: "none" }} />
                    <Input containerStyle={{ border: "none" }} />
                </div>
                <div style={{ flex: 1, display: "flex" }}>
                    <Switch/>
                </div>
                <div style={{ flex: 0.5, display: "flex" }}>
                    <button>Search</button>
                </div>
            </div>
            <span><b onClick={() => setMoreFiltersOpen(true)}>More filters</b></span>
        </div>
    );
}
