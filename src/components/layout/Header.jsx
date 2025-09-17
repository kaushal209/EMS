import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import crossIcon from '../../../public/cross-icon.svg';
import estateinLogo from '../../../public/estatein-logo.svg';


const Header = () => {

    const [showDiscover, setShowDiscover] = useState(true);
    const discoverHandler = (e) => {
		e.preventDefault();
		setShowDiscover(!showDiscover);
	}

    const pageLinks = [
        { 
            path: '/',
            name: 'Home', 
        },
        { 
            path: '/about',
            name: 'About Us', 
        },
        { 
            path: '/properties',
            name: 'Properties', 
        },
        { 
            path: '/services', 
            name: 'Services', 
        },
    ];
    const linkRoute = useRouter();

    return (
        <>
            <header className="header">
                {
                    showDiscover && (
                        <div className="discover">
                            <div className="discover-section">
                                <div className="left-part">
                                    <span>✨Discover Your Dream Property with Estatein</span>
                                    <div className="learn-btn">
                                        <Link href="#">Learn More</Link>
                                    </div>
                                </div>
                                <div className="right-part">
                                    <Link href="#" onClick={(e) => discoverHandler(e)}>
                                        <i><Image src={crossIcon} alt="cross" width="24" height="24" /></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="container">
                    <div className="main_header">
                        <div className="logo">
                            <Link href="/"><Image src={estateinLogo} alt="logo" width="160" height="48" /></Link>
                        </div>
                        <div className="navbar_part">
                            <nav className="navbar-block">
                                <ul>                          
                                    {pageLinks.map((pagesList, index) => {
                                        const {path, name} = pagesList;
                                        const isActive = linkRoute.pathname === path;
                                        return (
                                            <li key={index} className={isActive ? 'active' : ''}>
                                                <Link href={path}>{name}</Link>
                                            </li>
                                        )
								    })}
                                </ul>
                            </nav>
                            <div className="contact-btn">
                                <Link href="/">Contact Us</Link>
                            </div>
                        </div>
                        <div className="menu-btn">
                            <Link href="#">
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;