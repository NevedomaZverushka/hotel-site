import React from 'react';
import {header, logo} from '../assets/images';

const menu = [
    { id: 1, title: "Category", href: "/" },
    { id: 2, title: "Category", href: "/" },
    { id: 3, title: "Category", href: "/" },
    { id: 4, title: "Category", href: "/" },
];

export default function Header() {
    const [width, setWidth] = React.useState(0);
    const [openDropdown, setOpenDropdown] = React.useState(false);

    React.useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const dropdownMode = React.useMemo(() => width <= 970, [width]);

    return(
        <>
            <div className="header" style={{ backgroundImage: `url(${header})` }}>
                <div className="wrap">
                    <div className="row">
                        <img src={logo} />
                        <h3>Logo place</h3>
                    </div>
                    {dropdownMode
                        ? (
                            openDropdown
                                ? <a className="btn" onClick={() => setOpenDropdown(false)}>&#10005;</a>
                                : <a className="btn" onClick={() => setOpenDropdown(true)}>&#9776;</a>
                        )
                        : (
                            <nav className="row" style={{ gap: "2rem" }}>
                                {menu.map(({title, href, id}) => <a key={id} href={href}>{title}</a>)}
                            </nav>
                        )
                    }
                </div>
            </div>
            {openDropdown && (
                <nav className="dropdown">
                    {menu.map(({title, href, id}) => <a key={id} href={href}>{title}</a>)}
                </nav>
            )}
        </>
    );
}
