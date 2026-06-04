 import SplitText from "./ui/SplitText";


 const Contact = () => {
    return (
        <section>
            <SplitText
                text="Napisz do mnie"
                className="skills__heading text-7xl font-bold text-center text-white mb-16"
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

            <div className="contact__grid">
                <div className="contact__tile contact__tile--socials">
                    <p className="contact__tile--label"></p>
                    <h3 className="contact__tile-heading">Social Media</h3>

                    <div className="contact__tile--socials-list">
                        <a href="">
                            <span className="social-icon"></span>
                            <span className="social-name"></span>
                        </a>
                        <a href="">
                            <span className="social-icon"></span>
                            <span className="social-name"></span>
                        </a>
                        <a href="">
                            <span className="social-icon"></span>
                            <span className="social-name"></span>
                        </a>
                        <a href="">
                            <span className="social-icon"></span>
                            <span className="social-name"></span>
                        </a>
                    </div>
                </div>
                <div className="contact__tile contact__tile--form">
                    <p className="contact__tile-label">Bezpośredni kontakt</p>
                    <h3 className="contact__tile-heading">Wyślij wiadomość</h3>

                    <div className="contact__form">
                        <div className="contact__form-group">
                            <label htmlFor="" className="contact__form-label">Imie</label>
                            <input type="text" name="" id="" className="contact__form-input" />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="" className="contact__form-label">E-mail</label>
                            <input type="text" name="" id="" className="contact__form-input" />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="" className="contact__form-label">Wiadomosc</label>
                            <textarea
                                className="contact__form-textarea"
                                placeholder="Napisz co masz na myśli..."
                                rows={4}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Contact;