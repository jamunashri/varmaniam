import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [sMsg, setSMsg] = useState('')
    const ref = useRef()
    const sendMesage = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_aydu8ur', 'template_cd9xzg9', ref.current, 'pte_yFQV4eChKKjJz')
            .then((result) => {
                setSMsg('success')
            }, (error) => {
                setSMsg('fail')
            });
    }
    return (
        <>
            <div class="container-fluid pt-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5" style={{ madth: "500px" }}>
                        <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Any Questions?</h5>
                        <h1 class="display-4">Please Feel Free To Contact Us</h1>
                    </div>
                    <div class="row g-5 mb-5">
                        <div class="col-lg-4">
                            <div class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ height: "200px" }}>
                                <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: "100px", height: "70px", transform: "rotate(-15deg)" }}>
                                    <i class="fa fa-2x fa-location-arrow text-white" style={{ transform: "rotate(15deg)" }}></i>
                                </div>
                                <h6 class="mb-0">Varmaniam Foundation, 3GR5+H74, Manakudi-Kanyakumari Rd, Muhilankudiyuruppu, TN</h6>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ height: "200px" }}>
                                <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: "100px", height: "70px", transform: "rotate(-15deg)" }}>
                                    <i class="fa fa-2x fa-phone text-white" style={{ transform: "rotate(15deg)" }}></i>
                                </div>
                                <h6 class="mb-0">+91 80728 01076</h6>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ height: "200px" }}>
                                <div class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: "100px", height: "70px", transform: "rotate(-15deg)" }}>
                                    <i class="fa fa-2x fa-envelope-open text-white" style={{ transform: "rotate(15deg)" }}></i>
                                </div>
                                <h6 class="mb-0">varmaniamfoundation@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12" style={{ height: "500px" }}>
                            <div class="position-relative h-100">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.1002777779204!2d77.50846609999999!3d8.091255700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04eda24f05ec1d%3A0xae3a3d77a735843b!2sVarmaniam%20Foundation!5e0!3m2!1sen!2sin!4v1673680462278!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center position-relative" style={{ marginTop: "-200px", zIndex: "1" }}>
                        <div class="col-lg-8">
                            <div class="bg-white rounded p-5 m-5 mb-0">
                                <form ref={ref}>
                                    <div class="row g-3">
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control bg-light border-0" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" style={{ height: "55px" }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="email" class="form-control bg-light border-0" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" style={{ height: "55px" }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control bg-light border-0" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Your Mobile" style={{ height: "55px" }} />
                                        </div>
                                        <div class="col-12">
                                            <input type="text" class="form-control bg-light border-0" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" style={{ height: "55px" }} />
                                        </div>
                                        <div class="col-12">
                                            <textarea class="form-control bg-light border-0" rows="5" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit" onClick={(e) => sendMesage(e)}>Send Message</button>
                                        </div>
                                        {sMsg && sMsg === 'success' && <span style={{ color: 'green' }}>Message has been Sent !</span>}
                                        {sMsg === 'fail' && <span style={{ color: 'red' }}> Something went wrong, please try again later</span>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact