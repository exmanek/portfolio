import SplitText from "./ui/SplitText";
import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { useState } from "react"; 
import emailjs from "@emailjs/browser"

 const Contact = () => {
    const [form, setForm] = useState({name: "", email: "", message: ""})
    const [status, setStatus] = useState("idle") //idle, sending, success, error

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setStatus("sending");
 
        try {
             await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name:  form.name,
                    email: form.email,
                    message:    form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
        }
    };

    const isSending = status === "sending";

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
                        <a href="https://github.com/exmanek" target="_blank" rel="noopener noreferrer" className="contact__social-card" >
                            <span className="social-icon">
                                <FaGithub />
                            </span>
                            <span className="social-name">GitHub</span>
                        </a>
                        <a href="https://discord.com/invite/6CrJVKvC" target="_blank" rel="noopener noreferrer" className="contact__social-card" >
                            <span className="social-icon">
                                <FaDiscord />
                            </span>
                            <span className="social-name">Discord</span>
                        </a>
                        <a href="https://www.instagram.com/szymoneke_/" target="_blank" rel="noopener noreferrer" className="contact__social-card" >
                            <span className="social-icon">
                                <FaInstagram />
                            </span>
                            <span className="social-name">Instagram</span>
                        </a>
                    </div>
                </div>
                <div className="contact__tile contact__tile--form">
                    <p className="contact__tile-label">Bezpośredni kontakt</p>
                    <h3 className="contact__tile-heading">Wyślij wiadomość</h3>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label htmlFor="" className="contact__form-label">Imie</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className="contact__form-input"
                                value={form.name}
                                onChange={handleChange}
                                disabled={isSending}
                                required />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="" className="contact__form-label">E-mail</label>
                            <input 
                                type="email"
                                id="email"
                                name="email" 
                                className="contact__form-input"
                                value={form.email}
                                onChange={handleChange}
                                disabled={isSending}
                                required />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="" className="contact__form-label">Wiadomosc</label>
                            <textarea
                                id="message"
                                name="message"
                                className="contact__form-textarea"
                                placeholder="Napisz co masz na myśli..."
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                disabled={isSending}
                                required
                            />
                        </div>
                         {status === "success" && (
                            <p className="contact__form-status contact__form-status--success">
                                ✓ Wiadomość wysłana! Odezwę się wkrótce.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="contact__form-status contact__form-status--error">
                                ✗ Coś poszło nie tak. Spróbuj ponownie.
                            </p>
                        )}
 
                        <button type="submit" className="contact__form-btn" disabled={isSending}>
                            {isSending ? "Wysyłanie..." : "Wyślij"}
                        </button>
                    </form>
                </div>
            </div>
            
        </section>
    )
}

export default Contact;