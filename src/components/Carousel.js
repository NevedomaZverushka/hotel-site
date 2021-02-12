import React from 'react';
import Slider from "react-slick";

const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'sample'
};

export default function Carousel(props) {
    const { data } = props;
    return(
        <div className="carousel">
            <h2>You also like</h2>
            <Slider {...settings} >
                <div><img src='http://placekitten.com/g/400/200' /></div>
                <div><img src='http://placekitten.com/g/400/200' /></div>
                <div><img src='http://placekitten.com/g/400/200' /></div>
            </Slider>
        </div>
    );
}
