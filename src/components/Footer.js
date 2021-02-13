import React from 'react';
import { social, logo } from '../assets/images';
import { Dropdown } from '../components';

const categories = [
    {
        id: 1,
        links: [
            { id: 1, title: 'Category', href: '/' },
            { id: 2, title: 'Category', href: '/' },
            { id: 3, title: 'Category', href: '/' },
            { id: 4, title: 'Category', href: '/' },
            { id: 5, title: 'Category', href: '/' },
            { id: 6, title: 'Category', href: '/' },
        ]
    },
    {
        id: 2,
        links: [
            { id: 1, title: 'Category', href: '/' },
            { id: 2, title: 'Category', href: '/' },
            { id: 3, title: 'Category', href: '/' },
            { id: 4, title: 'Category', href: '/' },
            { id: 5, title: 'Category', href: '/' },
            { id: 6, title: 'Category', href: '/' },
        ]
    },
    {
        id: 3,
        links: [
            { id: 1, title: 'Category', href: '/' },
            { id: 2, title: 'Category', href: '/' },
            { id: 3, title: 'Category', href: '/' },
        ]
    }
];
const menu = [
    { id: 1, title: 'About us', href: '/' },
    { id: 2, title: 'Privacy', href: '/' },
    { id: 3, title: 'Terms of use', href: '/' },
];
const media = [
    { id: 1, image: social.facebook, href: '/' },
    { id: 2, image: social.instagram, href: '/' },
    { id: 3, image: social.google, href: '/' },
    { id: 4, image: social.twitter, href: '/' },
];

const languageOptions = [
    { value: 'eng', label: 'eng' },
    { value: 'rus', label: 'rus' },
    { value: 'ukr', label: 'ukr' },
];

export default function Footer() {
    const [language, setLanguage] = React.useState(languageOptions[0]);

    return(
        <div className="footer">
            <div className="block">
                <Dropdown
                    containerStyle={{ marginBottom: "1rem" }}
                    items={languageOptions}
                    item={language}
                    setItem={setLanguage}
                />
                <Dropdown
                    items={languageOptions}
                    item={language}
                    setItem={setLanguage}
                />
            </div>
            {categories.map(({ id, links }) => {
                return(
                    <div key={id} className="block column">
                        {links.map((link) => {
                            return(
                                <a key={link.id} href={link.href}>
                                    {link.title}
                                </a>
                            )
                        })}
                    </div>
                )
            })}
            <div className="block column">
                {menu.map(({ id, title, href }) => <a key={id} href={href}>{title}</a>)}
            </div>
            <div className="block column" style={{ gap: '1rem' }}>
                <span className="bold">+0 123 456 789</span>
                <span>mail@mail.com</span>
                <div className="row" style={{ justifyContent: 'space-between', flex: 1 }}>
                    {media.map(({ id, image, href }) => {
                        return(
                            <a className="icon" key={id} href={href} style={{ backgroundImage: `url(${image})` }} />
                        );
                    })}
                </div>
            </div>
            <div className="block row">
                <img src={logo} />
                <h3>Logo place</h3>
            </div>
        </div>
    );
}
