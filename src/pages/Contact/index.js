import '../../styles/Contact.css'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {
    const form = useRef();
    const [messageSucces, setSucces] = useState('none');
    const [messageError, setError] = useState('none');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isDisabled, setDisabled] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        console.log(form.current)
        emailjs.sendForm('service_oz4qnqs', 'template_agjfl9f', form.current, 'cSHtX3pMgdqyEVuBp')
            .then((result) => {
                setSucces('block')
                setError('none')
                
            }, (error) => {
                setError(`block`)
                setSucces('none')
                console.log(error);
            });
    };
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    useEffect(() => {
        if (validateEmail(email) && name !== '' && message !== '') {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }, [name, email, message]);
    return (

        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="text-light fw-bold">Contact Form </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-md-6 d-flex align-items-stretch ">
                                    <div className="contact-wrap w-100 p-md-5 p-4 py-5">
                                        <h3 className="mb-4">Write us</h3>
                                        <div id="form-message-warning" className="mb-4"></div>
                                        <div id="form-message-success" className="mb-4">
                                            Your message was sent, thank you!
                                        </div>
                                        <form ref={form} onSubmit={sendEmail} id="contactForm" name="contactForm" className="contactForm" novalidate="novalidate">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group position-relative">
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" required onChange={(e) => { setName(e.target.value) }} />
                                                        <span className='position-absolute text-danger top-50 end-0 translate-middle-y fs-5'>*</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 ">
                                                    <div className="form-group position-relative">
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }} />
                                                        <span className='position-absolute text-danger top-50 end-0 translate-middle-y fs-5'>*</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group position-relative">
                                                        <textarea name="message" className="form-control" id="message" cols="30" rows="6" placeholder="Message" required onChange={(e) => { setMessage(e.target.value) }}></textarea>
                                                        <span className='position-absolute text-danger top-50 end-0 translate-middle-y fs-5'>*</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="submit" value="Send Message" className="btn btn-primary" disabled={isDisabled} />
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group" style={{display:messageSucces}}>
                                                        <div class="alert alert-success d-flex align-items-center" role="alert">
                                                        <i class="bi bi-check-circle-fill me-2"></i>
                                                           
                                                            <div>
                                                                Your message sent with success Thanks to Contact us
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group" style={{display:messageError}}>
                                                        <div class="alert alert-danger" role="alert">
                                                            <i class="bi bi-x-circle-fill me-2"></i>
                                                            There was a problem sending, thanks for re-sending
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch ">
                                    <div className="info-wrap w-100 p-md-5 p-4 py-5 img">
                                        <h3>Contact information</h3>
                                        <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                        <div className="dbox w-100 d-flex align-items-start">
                                            <div className="icon d-flex align-items-center justify-content-center ">
                                                <span className="fa fa-map-marker text-warning"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p className='text-secondary'><span className='text-warning'>Address:</span> Ouled Teima Souss Massa Maroc</p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone text-success"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span className='text-warning'>Phone:</span> <a target='_blank' rel="noreferrer" href="tel://+212653299145">+ 212653299145</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane text-primary"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span className='text-warning'>Email:</span> <a target='_blank' rel="noreferrer" href="mailto:tfaresisam@gmail.com">tfaresisam@gmail.com</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe text-secondary"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span className='text-warning'>Website</span> <a target='_blank'  rel="noreferrer" href="https://tfaresisam.ga">tfaresisam.ga</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-linkedin-square text-primary" aria-hidden="true"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span className='text-warning'>Linkedin</span> <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/isam-tfares-888b8a224">My Linkedin account</a></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <form ref={form} onSubmit={sendEmail}>
     <label>Name</label>
     <input type="text" name="user_name" />
     <label>Email</label>
     <input type="email" name="user_email" />
     <label>Message</label>
     <textarea name="message" />
     <input type="submit" value="Send" />
   </form> */}
        </section>
    )
}


// service_oz4qnqs