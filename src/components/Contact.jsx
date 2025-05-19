import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./styles.css"
import Footer from './Footer';

const Contact = () => {
    const getTime = () => {
        const now = new Date();

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = days[now.getDay()];

        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
        const date = now.getDate().toString().padStart(2, '0');

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        const fullDateTime = `${dayName}, ${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        return fullDateTime;

    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_hfn8avt',      // your service ID
            'template_4eu0r19',      // your template ID
            form.current,
            'pnLP3RdG6_TKNjt_m'         // your public key
        )
            .then(() => {
                alert('Message sent!');
            }, (error) => {
                console.error('Email sending error:', error);
                alert('Failed to send message.');
            });
    };

    return (
        <>
            <div>
                <br />
                <p style={{ fontSize: "30px" }}> <i class="fa-solid fa-message"></i> Message your Queries ... </p>
            </div>
            <div className="contactFormContainer">

                <form ref={form} onSubmit={sendEmail}>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input required type="text" name='name' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>


                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input required type="email" name='email' class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>


                    <div class="form-floating">
                        <textarea required name='message' class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label for="floatingTextarea2">Message</label>
                    </div>
                    <br />

                    <button className='btn btn-warning' type="submit"> <i class="fa-solid fa-paper-plane"></i> Send</button>
                </form>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
