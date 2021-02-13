import React from 'react';
import {icons} from "../assets/images";

export default function HousePreview(props) {
    const { image, title, subtitle, price, info, isLiked } = props;
    return(
        <div className="preview_block column">
            <div className="image" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(30, 79, 96, 0.7)), url(${image})` }}>
                <div className="like">
                    <div className="icon">
                        <img src={isLiked ? icons.heart : icons.heartOutline} />
                    </div>
                </div>
                <div className="row arrows">
                    <img src={icons.arrowLeftLight} />
                    <img src={icons.arrowRightLight} />
                </div>
                <div className="column">
                    <div className="row">
                        <h2>{title}</h2>
                        <h2>
                            {price}
                            <span>$ / night</span>
                        </h2>
                    </div>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div className="row services">
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
    )
}
