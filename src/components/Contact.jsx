 import SplitText from "./ui/SplitText";


 const Contact = () => {
    return (
        <section className="contact">
            <SplitText
                text="Napisz do mnie"
                className="contact__heading section-heading text-center mb-16"
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
                        <a href="" target="_blank" rel="noopener noreferrer" className="contact__social-card" >
                            <span className="social-icon"></span>
                            <span className="social-name">GitHub</span>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="contact__social-card" >
                            <span className="social-icon"></span>
                            <span className="social-name">Discord</span>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="contact__social-card" >
                            <span className="social-icon"></span>
                            <span className="social-name"></span>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="contact__social-card" >
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
                            />
                        </div>
                        <button className="contact__form-btn">
                            Wyślij
                        </button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Contact;