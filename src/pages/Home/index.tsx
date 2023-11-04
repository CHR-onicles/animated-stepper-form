import { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import { PrimaryButton } from "@components/Button";
import { CustomDatePicker } from "@components/CustomDatePicker";
import { Form } from "@components/Form";

import { steps } from "@data/stepper";

import Logo from "@assets/misc/logo.png";

import { StyledHome } from "./Home.styled";

import "swiper/css";

// Function to prevent users from tabbing into another step without finishing
// the current step
const getTabIndex = (currentStep: number, validStep: number) => {
  return currentStep === validStep ? 0 : -1;
};

export const Home = () => {
  const [dob, setDob] = useState<Date>();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({} as any);

  const handleOnChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  useEffect(() => {
    if (dob) {
      setFormData({ ...formData, dob });
    }
  }, [dob]);

  useEffect(() => {
    console.log("[Form data]:", formData);
  }, [formData]);

  return (
    <StyledHome>
      <div className="content">
        <div className="left-section">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <ul className="stepper">
            {steps.map(({ title, position }) => (
              <li
                key={position}
                className={`stepper-item ${step === position ? "active" : ""} ${
                  step > position ? "completed" : ""
                }`}>
                <div className="icon-wrapper">
                  {step <= position ? <span>{position}</span> : <BsCheckLg />}
                </div>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-section">
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <Form
                step={step}
                setFormData={setFormData}
                setStep={setStep}
                className="form">
                <div className="form-step">
                  <p className="form-step-counter">Step 1</p>
                  <div className="form-group">
                    <div className="form-field">
                      <label htmlFor="fullName">
                        Full name <sup>*</sup>
                      </label>
                      <input
                        type="text"
                        placeholder="Eg: Dwight K. Schrute"
                        required
                        name="fullName"
                        id="fullName"
                        value={formData.fullName ?? ""}
                        onChange={handleOnChange}
                        tabIndex={getTabIndex(step, 1)}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="dob">
                        Date of birth<sup>*</sup>
                      </label>
                      <CustomDatePicker
                        id="dob"
                        startDate={dob ?? undefined}
                        setStartDate={setDob}
                        placeholder="Select a date"
                        showYearDropdown
                        required
                        tabIndex={getTabIndex(step, 1)}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">
                        Email<sup>*</sup>
                      </label>
                      <input
                        type="email"
                        placeholder="Eg: dwightkschrute@gmail.com"
                        id="email"
                        name="email"
                        value={formData.email ?? ""}
                        onChange={handleOnChange}
                        required
                        tabIndex={getTabIndex(step, 1)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-footer">
                  <PrimaryButton tabIndex={getTabIndex(step, 1)}>
                    Next
                  </PrimaryButton>
                </div>
              </Form>
            </SwiperSlide>
            <SwiperSlide>
              <Form
                step={step}
                setFormData={setFormData}
                setStep={setStep}
                className="form">
                <div className="form-step">
                  <p className="form-step-counter">Step 2</p>
                  <div className="form-group">
                    <div className="form-field-wrapper">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        placeholder="Eg: Germany"
                        id="country"
                        name="country"
                        value={formData.country ?? ""}
                        onChange={handleOnChange}
                        tabIndex={getTabIndex(step, 2)}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="state">State/Province</label>
                      <input
                        type="text"
                        placeholder="Eg: Bayern"
                        id="state"
                        name="state"
                        value={formData.state ?? ""}
                        onChange={handleOnChange}
                        tabIndex={getTabIndex(step, 2)}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        placeholder="Eg: Munich"
                        id="city"
                        name="city"
                        value={formData.city ?? ""}
                        onChange={handleOnChange}
                        tabIndex={getTabIndex(step, 2)}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="postal">Postal Code</label>
                      <input
                        type="text"
                        placeholder="Eg: 80331"
                        id="postal"
                        name="postal"
                        value={formData.postal ?? ""}
                        onChange={handleOnChange}
                        tabIndex={getTabIndex(step, 2)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-footer">
                  <button
                    tabIndex={getTabIndex(step, 2)}
                    type="button"
                    onClick={() => {
                      setStep(step - 1);
                    }}>
                    Previous
                  </button>
                  <PrimaryButton tabIndex={getTabIndex(step, 2)}>
                    Next
                  </PrimaryButton>
                </div>
              </Form>
            </SwiperSlide>
            <SwiperSlide>
              <Form
                step={step}
                setFormData={setFormData}
                setStep={setStep}
                className="form">
                <div className="form-step">
                  <p className="form-step-counter">Step 3</p>
                  <div className="form-group">
                    <div className="form-field">
                      <label htmlFor="occupation">Occupation</label>
                      <input
                        type="text"
                        placeholder="Eg: Salesman"
                        id="occupation"
                        name="occupation"
                        value={formData.occupation ?? ""}
                        onChange={handleOnChange}
                        tabIndex={getTabIndex(step, 3)}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="company">Company name</label>
                      <input
                        type="text"
                        placeholder="Eg: Dunder Mifflin"
                        id="company"
                        name="company"
                        value={formData.company ?? ""}
                        onChange={handleOnChange}
                        tabIndex={getTabIndex(step, 3)}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="industry">Industry</label>
                      <input
                        type="text"
                        placeholder="Eg: Paper"
                        id="industry"
                        name="industry"
                        value={formData.industry ?? ""}
                        onChange={handleOnChange}
                        tabIndex={getTabIndex(step, 3)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-footer">
                  <button
                    tabIndex={getTabIndex(step, 3)}
                    type="button"
                    onClick={() => {
                      setStep(step - 1);
                    }}>
                    Previous
                  </button>
                  <PrimaryButton tabIndex={getTabIndex(step, 3)}>
                    Submit
                  </PrimaryButton>
                </div>
              </Form>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </StyledHome>
  );
};
