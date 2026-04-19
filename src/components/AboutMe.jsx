import SplitText from './ui/SplitText';
import GradientText from './ui/GradientText'

const AboutMe = () => {
    return (
        <section
        className="aboutme"
        id="aboutme">
            <SplitText
                text="O mnie"
                className="aboutme__heading"
                tag="h2"
                delay={100}
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

            <p
            className="aboutme__text">
                Hej, jestem Szymon - tworzę strony internetowe, które łączą estetykę z funkcjonalnością i robią wrażenie.
                Ciągle rozwijam swoje umiejętności i szukam nowych wyzwań, które pozwolą mi tworzyć jeszcze lepsze rzeczy.</p>
            

        </section>
    )
}

export default AboutMe;