import React, { useEffect } from 'react'
import { useState } from 'react'

const Navbar = () => {
    useEffect(() => {
        let pathName = window.location.pathname
        switch (pathName) {
            case '/': {
                setActiveVal('home')
                break;
            } case '/about': {
                setActiveVal('about')
                break;
            } case '/contact': {
                setActiveVal('contact')
                break;
            }
            case '/service': {
                setActiveVal('service')
                break;
            }
            default: {
                setActiveVal('home')
                break;
            }
        }
    }, [])
    const [isNavBarOpen, setNavBarOpen] = useState(false)
    const [activeVal, setActiveVal] = useState('home')
    return (
        <>
            <div className="container-fluid sticky-top bg-white shadow-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                        <a href="/" className="navbar-brand">
                            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>Medinova</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={() => setNavBarOpen(!isNavBarOpen)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isNavBarOpen && 'show'}`} id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="/" className={`nav-item nav-link ${activeVal === 'home' && 'active'}`}>Home</a>
                                <a href="/about" className={`nav-item nav-link ${activeVal === 'about' && 'active'}`}>About</a>
                                <a href="/service" className={`nav-item nav-link ${activeVal === 'service' && 'active'}`}>Service</a>
                                {/* <a href="price.html" className="nav-item nav-link">Pricing</a> */}
                                {/* <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                        <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                        <a href="team.html" className="dropdown-item">The Team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="appointment.html" className="dropdown-item">Appointment</a>
                                        <a href="search.html" className="dropdown-item">Search</a>
                                    </div>
                                </div> */}
                                <a href="/contact" className={`nav-item nav-link ${activeVal === 'contact' && 'active'}`}>Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar