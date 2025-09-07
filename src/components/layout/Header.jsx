import Link from "next/link";
import Image from "next/image";
import crossIcon from '../../../public/cross-icon.svg';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="discover">
                    <div className="discover-section">
                        <div className="left-part">
                            <span>✨Discover Your Dream Property with Estatein</span>
                            <div className="learn-btn">
                                <Link href="#">Learn More</Link>
                            </div>
                        </div>
                        <div className="right-part">
                            <Link href="#"><i><Image src={crossIcon} alt="cross" width="24" height="24" /></i></Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;