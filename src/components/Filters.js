import React from 'react';
import {Dropdown, Input, Switch} from "./index";
import { icons } from "../assets/images";

const options = [
    { value: 'Price1', label: 'Price1' },
    { value: 'Price2', label: 'Price2' },
    { value: 'Price3', label: 'Price3' },
];

export default function Filters() {
    const [moreFiltersOpen, setMoreFiltersOpen] = React.useState(false);

    return(
        <React.Fragment>
            <div className={`filters ${moreFiltersOpen ? "" : "shadow"} column`}>
                <div className="row" style={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    alignContent: 'stretch'
                }}>
                    <div className="inputs" style={{ flex: 2.5}}>
                        <Input containerStyle={{ border: "none", flex: 2 }} />
                        <Input containerStyle={{ border: "none", flex: 1 }} rightIcon={icons.calendar} value={"01/01/2020"} />
                        <Input containerStyle={{ border: "none", flex: 1 }} rightIcon={icons.calendar} value={"01/01/2020"} />
                        <Input containerStyle={{ border: "none", flex: 1 }} rightIcon={icons.plus} value={"+2"} />
                    </div>
                    <div style={{ flex: 1, display: "flex" }}>
                        <Switch/>
                    </div>
                    <div style={{ flex: 1, display: "flex" }}>
                        <button>Search</button>
                    </div>
                </div>
                {!moreFiltersOpen && (
                    <span><b onClick={() => setMoreFiltersOpen(true)}>More filters</b></span>
                )}
            </div>
            {moreFiltersOpen && (
                <div className="all_filters">
                    <div className={'row'} style={{gap: '1rem'}}>
                        <Dropdown items={options} darkmode={false} containerStyle={{ flex: 1, minWidth: '7rem' }} placeholder={"Price"} />
                        <Dropdown items={options} darkmode={false} containerStyle={{ flex: 1, minWidth: '7rem' }} placeholder={"Price"} />
                        <Dropdown items={options} darkmode={false} containerStyle={{ flex: 1, minWidth: '7rem' }} placeholder={"Price"} />
                    </div>
                    <div className={'row'} style={{gap: '1rem'}}>
                        <Dropdown items={options} darkmode={false} containerStyle={{ flex: 1, minWidth: '7rem' }} placeholder={"Price"} />
                        <Dropdown items={options} darkmode={false} containerStyle={{ flex: 1, minWidth: '7rem' }} placeholder={"Price"} />
                        <Dropdown items={options} darkmode={false} containerStyle={{ flex: 1, minWidth: '7rem' }} placeholder={"Price"} />
                    </div>
                    <span style={{ flex: "1 100%" }}><b>Clean filters</b></span>
                    <span style={{ flex: "1 100%" }}>
                            <b onClick={() => setMoreFiltersOpen(false)}>Hide filters</b>
                        </span>
                </div>
            )}
        </React.Fragment>
    );
}
