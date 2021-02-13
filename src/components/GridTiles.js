import React from 'react';
import {HousePreview, Dropdown} from "./index";
import {houses, icons} from "../assets/images";

const languageOptions = [
    { value: 'eng', label: 'eng' },
    { value: 'rus', label: 'rus' },
    { value: 'ukr', label: 'ukr' },
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
        <>
            <div className="row grid_header">
                <div>
                    <h3 className="row"><div>Paris</div>, France</h3>
                </div>
                <div className="row">
                    <span>Sort by:</span>
                    <Dropdown items={languageOptions} />
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
        </>
    );
}
