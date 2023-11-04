import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import { steps } from "@data/stepper";


interface FormProps {
  children: React.ReactNode;
  step: number;
  setFormData: (arg: any) => void;
  setStep: (arg: number) => void;
}

export const Form = ({
  children,
  step,
  setFormData,
  setStep,
  ...rest
}: FormProps & React.HTMLAttributes<HTMLFormElement>) => {
  const swiper = useSwiper();
  const [prevStep, setPrevStep] = useState(-1);
  const TOTAL_STEPS = steps.length;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) {
      console.log("entered here");
      swiper.slideNext();
      setStep(step + 1);
    } else if (step === TOTAL_STEPS) {
      swiper.slideTo(0);
      setFormData({});
      setStep(1);
      setPrevStep(-1);
      alert("Form submitted!");
    }
  };

  useEffect(() => {
    console.log(step);
    if (step < prevStep) {
      swiper.slideTo(step - 1);
    }

    setPrevStep(step);
  }, [step]);

  return (
    <form onSubmit={handleFormSubmit} {...rest}>
      {children}
    </form>
  );
};
