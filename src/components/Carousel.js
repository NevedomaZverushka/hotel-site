import React from 'react';
import Slider from "react-slick";
import { Slide } from './index';
import {icons} from "../assets/images";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return(
        <button
            onClick={onClick}
            className={`arrow ${className}`}
            style={{ backgroundImage: `url(${icons.arrowRight})`, display: "block" }}
        />
    )
};
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return(
        <button
            onClick={onClick}
            className={`arrow ${className}`}
            style={{ backgroundImage: `url(${icons.arrowLeft})`, display: "block" }}
        />
    )
};

export default function Carousel(props) {
    const { data } = props;
    const [width, setWidth] = React.useState(0);

    React.useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const settings = React.useMemo(() => {
        let slidesToShow = 3;

        if (width <= 1200 && width >= 850) slidesToShow = 2;
        if (width < 850) slidesToShow = 1;

        return(
            {
                dots: false,
                infinite: true,
                arrows: true,
                slidesToShow,
                slidesToScroll: 1,
                className: 'slider',
                nextArrow: <NextArrow />,
                prevArrow: <PrevArrow />,
                centerMode: true,
            }
        );
    }, [width]);

    return(
        <div className="carousel">
            <h2>You also like</h2>
            <Slider {...settings} >
                {data.map((item) => <Slide key={item.id} {...item} />)}
            </Slider>
        </div>
    );
}
