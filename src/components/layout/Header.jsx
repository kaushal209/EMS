import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import crossIcon from '../../../public/cross-icon.svg';
import estateinLogo from '../../../public/estatein-logo.svg';


const Header = () => {

    const [showDiscover, setShowDiscover] = useState(true);
    const discoverHandler = (e) => {
		e.preventDefault();
		setShowDiscover(!showDiscover);
	}

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
                            <nav className="navbar">
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/">About Us</Link></li>
                                    <li><Link href="/">Properties</Link></li>
                                    <li><Link href="/">Services</Link></li>
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