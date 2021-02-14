import React from 'react';
import {HousePreview, Dropdown} from "./index";
import {houses, icons} from "../assets/images";

const options = [
    { value: 'Default1', label: 'Default1' },
    { value: 'Default2', label: 'Default2' },
    { value: 'Default3', label: 'Default3' },
];
const housesList = [
    {
        id: 1, image: houses.house_1, title: "Family village", subtitle: "Observatoire", price: 2600, isLiked: true,
        info: [
            { id: 1, label: "man", count: 4 },
            { id: 2, label: "bed", count: 2 },
            { id: 3, label: "bathtub", count: 1 },
        ]
    },
    {
        id: 2, image: houses.house_1, title: "Family village", subtitle: "Observatoire", price: 2600, isLiked: false,
        info: [
            { id: 1, label: "man", count: 4 },
            { id: 2, label: "bed", count: 2 },
            { id: 3, label: "bathtub", count: 1 },
        ]
    },
    {
        id: 3, image: houses.house_1, title: "Family village", subtitle: "Observatoire", price: 2600, isLiked: false,
        info: [
            { id: 1, label: "man", count: 4 },
            { id: 2, label: "bed", count: 2 },
            { id: 3, label: "bathtub", count: 1 },
        ]
    },
    {
        id: 4, image: houses.house_1, title: "Family village", subtitle: "Observatoire", price: 2600, isLiked: true,
        info: [
            { id: 1, label: "man", count: 4 },
            { id: 2, label: "bed", count: 2 },
            { id: 3, label: "bathtub", count: 1 },
        ]
    }
];

export default function GridTiles() {
    return(
        <React.Fragment>
            <div className="row grid_header">
                <div style={{ flex: 2 }}>
                    <h3 className="row"><div>Paris,</div> France</h3>
                    <h4>we find <b>24</b> villas for you</h4>
                </div>
                <div className="row sort_block">
                    <span>Sort by:</span>
                    <Dropdown
                        items={options}
                        darkmode={false}
                        containerStyle={{ width: "10rem" }}
                        placeholder={"Default"}
                        optionStyle={{ height: "2rem", fontSize: "1rem" }}
                    />
                </div>
            </div>
            <div className="row" style={{ gap: "2rem", width: "100%" }}>
                {housesList.map((house) => <HousePreview key={house.id} {...house} />)}
            </div>
            <div className="row paginator">
                <img src={icons.arrowLeft} />
                <span className="current">1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <img src={icons.arrowRight} />
            </div>
        </React.Fragment>
    );
}
