import React from 'react';
import {banner, icons} from "../assets/images";

export default function Banner() {
    return(
        <div className="banner" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(30, 79, 96, 0.7)), url(${banner})` }}>

            <div className="like">
                <div className="icon">
                    <img src={icons.heart} />
                </div>
            </div>

            <div className="pagination">
                <div className="paginator"/>
                <div className="paginator unfilled"/>
                <div className="paginator unfilled"/>
                <div className="paginator unfilled"/>
                <div className="paginator unfilled"/>
            </div>

        </div>
    );
}
