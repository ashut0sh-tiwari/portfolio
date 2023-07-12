import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const[toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}onClick={()=> toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active":"qualification__content"} >
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  Venus Public School - Gwalior
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2013</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">
                Govt. Gorkhi H.S School - Gwalior
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2015</i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor's in Computer Applications</h3>
                <span className="qualification__subtitle">
                  G.A.s College - Gwalior
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022</i>
                </div>
              </div>
              <div>
              <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
           
          </div>
          <div className={toggleState === 2 ? "qualification__content qualification__content-active":"qualification__content"}  >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Freelance Web Developer</h3>
                <span className="qualification__subtitle">
                  Self Employed
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">April 2022 - August 2022</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full Stack Web Developer</h3>
                <span className="qualification__subtitle">
                  Wisdora - Bhopal
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">September 2022 - April 2023</i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer | Digital Marketing Specialist</h3>
                <span className="qualification__subtitle">
                  MK Marketing - Gwalior
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">May 2023 - Present</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
