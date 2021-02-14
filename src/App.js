import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PropertyPage from './screens/PropertyPage';
import GridPage from "./screens/GridPage";

import {Footer, Header, MoreInformationForm, Carousel} from './components';

import { firstSlider, secondSlider, thirdSlider } from './assets/images';

const sliders = [
    {
        id: 1, image: thirdSlider, title: "Czech Republic", likes: 10,
        info: [
            { id: 1, label: "man", count: 4 },
            { id: 2, label: "bed", count: 2 },
            { id: 3, label: "bathtub", count: 1 },
        ]
    },
    {
        id: 2, image: secondSlider, title: "Spanish", likes: 10,
        info: [
            { id: 1, label: "man", count: 8 },
            { id: 2, label: "bed", count: 5 },
            { id: 3, label: "shower", count: 2 },
        ]
    },
    {
        id: 3, image: firstSlider, title: "Italy", likes: 10,
        info: [
            { id: 1, label: "man", count: 6 },
            { id: 2, label: "bed", count: 4 },
            { id: 3, label: "shower", count: 2 },
            { id: 4, label: "bathtub", count: 1 },
        ]
    },
    {
        id: 4, image: thirdSlider, title: "Czech Republic", likes: 10,
        info: [
            { id: 1, label: "man", count: 4 },
            { id: 2, label: "bed", count: 2 },
            { id: 3, label: "bathtub", count: 1 },
        ]
    }
];

function App() {
    return (
        <BrowserRouter>
            <Header/>

            <Switch>
                <Route path="/" component={PropertyPage} exact />
                <Route path="/grid" component={GridPage} exact />
            </Switch>

            <Carousel data={sliders} />
            <MoreInformationForm/>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
