import { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { BsCheckLg } from "react-icons/bs";
import { useUpdate } from "react-use";

import { PrimaryButton } from "@components/Button";
import { CustomDatePicker } from "@components/CustomDatePicker";

import { steps } from "@data/stepper";

import Logo from "@assets/misc/logo.png";

import { StyledHome } from "./Home.styled";

import "react-alice-carousel/lib/alice-carousel.css";


const responsive = {
  0: { items: 1 },
};

const TOTAL_STEPS = steps.length;

export const Home = () => {
  const [dob, setDob] = useState<Date>();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({} as any);
  const carouselRef = useRef<AliceCarousel>(null);
  const randomUpdate = useUpdate();

  const handleOnChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      if (carouselRef.current) carouselRef.current?.slideNext();
    } else if (step === TOTAL_STEPS) {
      carouselRef.current?.slideTo(0);
      setFormData({});
      setStep(1);
      alert("Form submitted!");

      //* Need to do this because Alice carousel wont move
      //* to the intended slide SMH!
      // window.location.reload();
    }
  };

  const items = [
    <form className="form" onSubmit={handleFormSubmit} key={1}>
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
            />
          </div>
        </div>
      </div>
      <div className="form-footer">
        <PrimaryButton>Next</PrimaryButton>
      </div>
    </form>,
    <form className="form" onSubmit={handleFormSubmit} key={2}>
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
            />
          </div>
        </div>
      </div>
      <div className="form-footer">
        <button
          type="button"
          onClick={() => {
            carouselRef?.current?.slidePrev();
            setStep(step - 1);
          }}>
          Previous
        </button>
        <PrimaryButton>Next</PrimaryButton>
      </div>
    </form>,
    <form className="form" onSubmit={handleFormSubmit} key={3}>
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
            />
          </div>
        </div>
      </div>
      <div className="form-footer">
        <button
          type="button"
          onClick={() => {
            carouselRef.current?.slidePrev();
            setStep(step - 1);
          }}>
          Previous
        </button>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </form>,
  ];

  useEffect(() => {
    if (dob) {
      setFormData({ ...formData, dob });
    }
  }, [dob]);

  useEffect(() => {
    console.log("[Form data]:", formData);
  }, [formData]);

  useEffect(() => {
    //* This is needed to trigger a re-render for alice carousel to animate
    //* the first slide
    randomUpdate();
  }, []);

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
          <AliceCarousel
            items={items}
            responsive={responsive}
            disableDotsControls
            disableButtonsControls
            animationDuration={300}
            animationType="slide"
            ref={carouselRef}
          />
        </div>
      </div>
    </StyledHome>
  );
};
