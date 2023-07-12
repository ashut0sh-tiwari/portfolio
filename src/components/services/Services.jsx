import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const[toggleState, setToggleState] = useState(0);
    const toggleTab=(index)=>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Website <br /> Development</h3>
                </div>
                <span className="services__button" onClick={()=> toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState===1? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Website Development</h3>
                        <p className="services__modal-description">Crafting custom websites with responsive designs and seamless functionality to help businesses thrive online.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Custom website development tailored to your unique business needs.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Responsive and mobile-friendly designs for optimal user experience.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Website maintenance and updates for smooth operation.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">SEO optimization to improve search engine visibility.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Secure web development practices to protect your data.</p>
                            </li >
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br/> Design</h3>
                </div>
                <span className="services__button" onClick={()=> toggleTab(2)}>View More <i className="uil uil-arrow-right services__vutton-icon"></i></span>
                <div className={toggleState===2? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>
                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">Creating visually stunning and user-friendly designs that enhance brand presence and deliver exceptional user experiences.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">User-centric designs that prioritize intuitive navigation and interaction.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Eye-catching visuals and modern aesthetics for a captivating user experience.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Consistent branding elements for a cohesive and professional look.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Responsive designs that adapt seamlessly across devices.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Typography and color choices that enhance readability and visual hierarchy.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Social Media <br />Management</h3>
                </div>
                <span className="services__button" onClick={()=> toggleTab(3)}>View More <i className="uil uil-arrow-right services__vutton-icon"></i></span>
                <div className={toggleState===3? "services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>
                        <h3 className="services__modal-title">Social Media Management</h3>
                        <p className="services__modal-description">Managing social media platforms, curating engaging content, and implementing effective strategies to drive audience engagement and brand growth.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Content creation and curation to engage your target audience.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Strategic planning and scheduling for optimal reach and visibility.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Social media advertising campaigns to amplify your brand's reach.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Hashtag research and implementation for increased discoverability.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Engaging visuals and creative designs for impactful posts.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services