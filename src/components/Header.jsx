import GradientBackground from "./ui/GradientBackground";
import SplitText from "./ui/SplitText";
import TextType from './ui/TextType';

const Header = () => {
    return (
        <header className="header">
            <GradientBackground />
            <div className="header__content">
                <SplitText
                text="Szymon Podlasiak"
                className="header__heading"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                showCallback
                />
                <TextType 
                className="header__text"
                text={["Frontend Developer", "for your website!", "Contact Now"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                texts={[""]}
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
                />
            </div>
        </header>
    )
}

export default Header;