import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'

const Appointment = () => {
    const [doctorName, setDoctorName] = useState('')
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [date, setDate] = useState('')
    const [disease, setDisease] = useState('')
    const doctorList = require('../constant/doctor.json')
    const ref = useRef()
    const sendAppt = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_aydu8ur', 'template_jxfozcg', ref.current, 'pte_yFQV4eChKKjJz')
            .then((result) => {
                // setSMsg('success')
                console.log(ref.current,'reef.current ')
            }, (error) => {
                // setSMsg('fail')
            });
    }
    console.log(doctorName,'doctorName')
    return (
        <>
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="mb-4">
                                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Appointment</h5>
                                <h1 class="display-4">Make An Appointment For Your Family</h1>
                            </div>
                            <p class="mb-5">Book your appointment with our well experienced doctors.</p>
                            <a class="btn btn-primary rounded-pill py-3 px-5 me-3" href="/service">Find Services</a>
                            {/* <a class="btn btn-outline-primary rounded-pill py-3 px-5" href="">Read More</a> */}
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-light text-center rounded p-5">
                                <h1 class="mb-4">Book An Appointment</h1>
                                <form ref={ref}>
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <select class="form-select bg-white border-0" style={{ height: "55px" }} name="doctorName" onChange={(e) => setDoctorName(e.target.value)}>
                                                <option >Select Doctor</option>
                                                {doctorList.map((item, key) => {
                                                    return (
                                                        <option value={item?.doctorName}  key={key} >{item?.doctorName}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control bg-white border-0" placeholder="Your Name" style={{ height: "55px" }} name={"name"} value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="mobile" class="form-control bg-white border-0" placeholder="Your Mobile" style={{ height: "55px" }} name={"mobile"} value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                        </div>
                                        <div class="col-12">
                                            <div class="date" id="date" data-target-input="nearest">
                                                <input type="date"
                                                    class="form-control bg-white border-0 datetimepicker-input"
                                                    placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{ height: "55px" }} name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                    <div class="time" id="time" data-target-input="nearest">
                                        <input type="text"
                                            class="form-control bg-white border-0 datetimepicker-input"
                                            placeholder="Disease" data-target="#time" name="disease" data-toggle="datetimepicker" style={{height: "55px"}} value={disease} onChange={(e) => setDisease(e.target.value)}/>
                                    </div>
                                </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit" onClick={(e) => sendAppt(e)}>Make An Appointment</button>
                                        </div>
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

export default Appointment;