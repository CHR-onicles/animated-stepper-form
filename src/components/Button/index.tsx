import { StyledPrimaryButton } from "./Button.styled";


interface ButtonProps {
  children: React.ReactNode;
}

export const PrimaryButton = ({
  children,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledPrimaryButton {...rest}>{children}</StyledPrimaryButton>;
};
