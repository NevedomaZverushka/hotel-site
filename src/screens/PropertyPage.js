import React from 'react';
import { Card } from "../components";
import {
    profile,
    bathtub, bed, man, parking, smoking, wifi, star, fillStar, arrowLeft, arrowRight,
    firstFloor, secondFloor
} from '../assets/images';

const services = [
    { id: 1, icon: man, info: 6 },
    { id: 2, icon: bed, info: 3 },
    { id: 3, icon: bathtub, info: 2 },
    { id: 4, icon: parking },
    { id: 5, icon: wifi },
    { id: 6, icon: smoking },
];
const details = [
    { id: 1, title: 'Kitchen', items: [ 'Dishwasher', 'Microwave Oven', 'Hob', 'Fridge', 'Dishwasher', 'Microwave Oven', 'Hob', 'Fridge' ] },
    { id: 2, title: 'Unity area', items: [ 'Washing machine' ] },
    { id: 3, title: 'Lounge', items: [ 'A/C unit', 'Satellite TV', 'Flat screen TV', 'DVD player', 'Dining facilities', 'Patio doors' ] },
    { id: 4, title: 'Features', items: [ 'Covered dining area', 'Portable barbecue', 'FREE pool towels' ] },
];
const floors = [
    { id: 1, title: '1 floor', image: firstFloor },
    { id: 2, title: '2 floor', image: secondFloor },
    { id: 3, title: 'Bedroom', image: firstFloor },
    { id: 4, title: 'Restroom', image: secondFloor }
];

export default function PropertyPage() {
    return(
        <div className="page">
            <div className="container">
                <Card style={{ flex: 2 }}>
                    <h1>Family village</h1>
                    <h3>Observatoire</h3>
                    <div className="row" style={{ gap: '1.5rem', paddingBottom: '1rem' }}>
                        {services.map(({ id, icon, info }) => {
                            return(
                                <div key={id} className="row" style={{ gap: '1rem', alignItems: 'flex-end' }}>
                                    <div className="icon" style={{ backgroundImage: `url(${icon})` }} />
                                    <span className="service_info">{info}</span>
                                </div>
                            )
                        })}
                    </div>
                    <p>
                        Typically Istrian in style, Ventura has been brought up to a lovely modern standard from its 150 year old foundations. The rustic house features light and fresh décor, with comfortable and tasteful furnishings. The open plan ground floor leads out to your very own private swimming pool, surrounded by a large sun terrace area which is the perfect place for time spent relaxing in the sun. An inviting covered summer barbeque house can also be found overlooking the pool for you to make the most of outdoor living on your Croatian holiday. Take a five minute drive through the beautiful countryside perfumed with lavender, to the closest town of Sveti Lorec for all of your amenities and be sure to visit the coastal resorts of Vsar, Rovinj, Porec and Pula for further exploring and lovely days out.
                    </p>
                </Card>
                <Card title={"Contact"} style={{ gap: '1.5rem' }}>
                    <div className="row" style={{ gap: '1rem' }}>
                        <div className="avatar" style={{ backgroundImage: `url(${profile})` }} />
                        <div className="column" style={{ gap: '0.8rem' }}>
                            <h4>Marina Marina</h4>
                            <span>Member since<br/>January 2019</span>
                        </div>
                    </div>
                    <p>
                        Kate was lovely, we had a great stay. We had our own bathroom and we were provided towels and supplies. The place is cozy and we are happy about our stay.
                    </p>
                    <div className="row" style={{ gap: '1.25rem' }}>
                        <button>Profile</button>
                        <button>Contact</button>
                    </div>
                </Card>
                <Card style={{ flex: '2 100%' }} title={"Availability"} />
                <Card style={{ flex: 2 }} title={"Details"}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', marginTop: '1.8rem' }}>
                        {details.map(({ id, title, items }) => {
                            return(
                                <div key={id} style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <h4 style={{ flex: 1 }}>{title}</h4>
                                    <p style={{ columnCount: 2, flex: 2 }}>
                                        {items.map(item => { return <span>{item}<br/></span> })}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </Card>
                <Card title={"Reviews"} style={{ gap: '1.5rem' }}>
                    <div className="row" style={{ gap: '1rem' }}>
                        <div className="avatar" style={{ backgroundImage: `url(${profile})` }} />
                        <div className="column" style={{ gap: '0.8rem' }}>
                            <h4>Marina Marina</h4>
                            <span>23 January 2013</span>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.2rem' }}>
                                <div className="star" style={{ backgroundImage: `url(${fillStar})` }} />
                                <div className="star" style={{ backgroundImage: `url(${fillStar})` }} />
                                <div className="star" style={{ backgroundImage: `url(${fillStar})` }} />
                                <div className="star" style={{ backgroundImage: `url(${star})` }} />
                            </div>
                        </div>
                    </div>
                    <p>
                        Kate was lovely, we had a great stay. We had our own bathroom and we were provided towels and supplies. The place is cozy and we are happy about our stay.
                    </p>
                    <div className="row" style={{ gap: '1.25rem' }}>
                        <button className="arrow" style={{ backgroundImage: `url(${arrowLeft})` }} />
                        <button className="arrow" style={{ backgroundImage: `url(${arrowRight})` }} />
                    </div>
                </Card>
                <Card style={{ flex: '2 100%' }} title={"Floor plan"}>
                    <div className="row" style={{ gap: '2rem', marginTop: '2rem' }}>
                        {floors.map(({ id, image, title }) => {
                            return(
                                <div key={id} className="column" style={{ flex: 1, alignItems: 'center', gap: '1rem' }}>
                                    <img src={image} />
                                    <h4>{title}</h4>
                                </div>
                            )
                        })}
                    </div>
                </Card>
            </div>
        </div>
    )
}
