import React from 'react';
import { icons } from "../assets/images";

export default function Slide(props) {
    const { image, title, likes, info } = props;
    return(
        <div className="slide">
            <img className="photo" src={image} />
            <div className="row title">
                <h5>{title}</h5>
                <div className="row">
                    <img className="icon" src={icons.heartLight} />
                    <span>{likes}</span>
                </div>
            </div>
            <div className="row" style={{ gap: '1rem' }}>
                {info.map(({ id, label, count }) => {
                    return(
                        <div key={id} className="row" style={{ gap: '0.3rem', alignItems: 'flex-end' }}>
                            <div className="icon" style={{ backgroundImage: `url(${icons[label]})` }} />
                            <span className="service_info">{count}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
