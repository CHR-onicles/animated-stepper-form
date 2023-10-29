import { StyledPrimaryButton } from "./Button.styled";


interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const PrimaryButton = ({
  children,
  className,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledPrimaryButton className={className} {...rest}>
      {children}
    </StyledPrimaryButton>
  );
};
