import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";

import { PrimaryButton } from "@components/Button";
import { CustomDatePicker } from "@components/CustomDatePicker";
import { Dropdown } from "@components/Dropdown";

import { paraclinicSteps } from "@data/generalConsultation";

import LogoFull from "@assets/misc/logo-procrea.png";

import { StyledHome } from "./Home.styled";


const TOTAL_PARACLINIC_STEPS = paraclinicSteps.length;

export const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [paraclinicStep, setParaclinicStep] = useState(1);

  const handleParaclinicFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paraclinicStep < TOTAL_PARACLINIC_STEPS) {
      setParaclinicStep(paraclinicStep + 1);
    } else if (paraclinicStep === TOTAL_PARACLINIC_STEPS) {
      console.log("submit form");
    }
  };

  return (
    <StyledHome>
      <div className="content">
        <div className="left-section">
          <Link to="#" className="logo">
            <img src={LogoFull} alt="" />
          </Link>

          <ul className="stepper">
            {paraclinicSteps.map(({ title, position }) => (
              <li
                key={position}
                className={`stepper-item ${
                  paraclinicStep === position ? "active" : ""
                } ${paraclinicStep > position ? "completed" : ""}`}>
                <div className="icon-wrapper">
                  {paraclinicStep <= position ? (
                    <span>{position}</span>
                  ) : (
                    <BsCheckLg />
                  )}
                </div>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-section">
          <form className="form" onSubmit={handleParaclinicFormSubmit}>
            {paraclinicStep === 1 ? (
              <div className="form-step">
                <div className="form-group">
                  <div className="form-field-wrapper">
                    <label htmlFor="location">Location</label>
                    <Dropdown
                      id="location"
                      ariaLabel="Location"
                      placeholder="Select a location"
                      items={["Becedi CI", "Abidjan", "Kwale KE", "Wale CI"]}
                    />
                  </div>
                  <div className="form-field-wrapper">
                    <label htmlFor="date">Date</label>
                    <CustomDatePicker
                      id="date"
                      startDate={startDate}
                      setStartDate={setStartDate}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-field-wrapper">
                    <label htmlFor="service">Service</label>
                    <Dropdown
                      id="service"
                      ariaLabel="Service"
                      placeholder="Select a service "
                      items={["Service 1", "Service 2", "Service 3"]}
                    />
                  </div>
                </div>
              </div>
            ) : null}

            {paraclinicStep === 2 ? (
              <div className="form-step">
                <div className="form-group">
                  <div className="form-field-wrapper">
                    <label htmlFor="blood-type">Blood type</label>
                    <Dropdown
                      id="blood-type"
                      ariaLabel="Blood type"
                      placeholder="Select a blood type"
                      items={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="height">Height (cm)</label>
                    <input type="text" placeholder="Eg: 273" id="height" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="weight">Weight (kg)</label>
                    <input type="text" placeholder="Eg: 50" id="weight" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="bmi">
                      BMI (m/kg<sup className="no-color">2</sup>)
                    </label>
                    <input type="text" value={6.7} readOnly id="bmi" />
                  </div>
                </div>
              </div>
            ) : null}

            {paraclinicStep === 3 ? (
              <div className="form-step">
                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="occupation">Occupation</label>
                    <input
                      type="text"
                      placeholder="Eg: Software Engineer"
                      id="occupation"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="alcohol">Alcohol consumption</label>
                    <input
                      type="text"
                      placeholder="Eg: 3 units/week"
                      id="alcohol"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-field">
                    <label htmlFor="diet">Diet</label>
                    <input type="text" id="diet" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="exercise">Exercising Frequency</label>
                    <input type="text" id="exercise" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="smoking">Smoking habits</label>
                  <textarea rows={5} id="smoking"></textarea>
                </div>
              </div>
            ) : null}

            <div className="form-footer">
              {paraclinicStep > 1 ? (
                <button
                  onClick={e => {
                    e.preventDefault();
                    if (paraclinicStep === 1) return;
                    setParaclinicStep(paraclinicStep - 1);
                  }}>
                  Previous
                </button>
              ) : null}
              <PrimaryButton>
                {paraclinicStep === TOTAL_PARACLINIC_STEPS ? "Submit" : "Next"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </StyledHome>
  );
};
