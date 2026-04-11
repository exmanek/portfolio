import GradientBackground from "./ui/GradientBackground";
import ASCIIText from './ui/ASCIIText';


const Header = () => {
    return (
        <header className="header">
            <GradientBackground />
            <div className="header__content">
                <h2 className="header__heading">Szymon Podlasiak</h2>
                <p className="header__text">Web Developer</p>
            </div>
        </header>
    )
}

export default Header;