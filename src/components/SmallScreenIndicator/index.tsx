import { Container } from "@styles/components/Container.styled";

import { ReactComponent as RotatePhoneIcon } from "@assets/icons/rotate-phone.svg";

import { StyledSmallScreenIndicator } from "./SmallScreenIndicator.styled";


export const SmallScreenIndicator = () => {
  return (
    <StyledSmallScreenIndicator>
      <Container style={{ height: "100%" }}>
        <div className="content">
          <RotatePhoneIcon className="rotate-icon" />
          <div className="text-content">
            <h1>Oops!!</h1>
            <p>Your screen size is too small :&lt;</p>
            <p>Please rotate your device or move to a bigger screen.</p>
          </div>
        </div>
      </Container>
    </StyledSmallScreenIndicator>
  );
};
