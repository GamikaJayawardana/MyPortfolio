"use client";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.layout}>
          {/* Left Column: Contact Details */}
          <div className={styles.detailsCol}>
            <div className={styles.header}>
              <p className={styles.nameTag}>Let&apos;s Work Together</p>
              <h2 className={styles.title}>CONTACT</h2>
            </div>

            <p className={styles.desc}>
              I&apos;m currently available for freelance work and full-time opportunities.
              If you have a project that needs some creative magic, I&apos;d love to hear about it.
            </p>

            <ul className={styles.contactList}>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+94 70 253 2380</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:gamikakj@gmail.com">gamikakj@gmail.com</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <a href="https://www.gamikakj.me" target="_blank" rel="noopener noreferrer">www.gamikakj.me</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Wijayasiri, Dela, Ratnapura</span>
              </li>
            </ul>

            <div className={styles.socials}>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>X / Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.formCol}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
