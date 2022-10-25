import styled from 'styled-components';

import { defaultTheme } from '../../themes/defaultTheme';

const buttonVariants = {
  default: {
    color: defaultTheme.colors.white,
    outline: 'none',
    backgroundColor: defaultTheme.colors.navy,
    fontWeight: defaultTheme.fontWeight.regular,
  },
  transparent: {
    color: defaultTheme.colors.navy,
    outline: 'none',
    backgroundColor: defaultTheme.colors.transparent,
    fontWeight: defaultTheme.fontWeight.regular,
  },
  danger: {
    color: defaultTheme.colors.magenta,
    outline: `1px solid ${defaultTheme.colors.magenta}`,
    backgroundColor: defaultTheme.colors.white,
    fontWeight: defaultTheme.fontWeight.regular,
  },
  disabled: {
    color: defaultTheme.colors.gray100,
    outline: `2px solid ${defaultTheme.colors.gray100}`,
    backgroundColor: defaultTheme.colors.white,
    fontWeight: defaultTheme.fontWeight.regular,
    boxShadow: `4px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.04)`,
    border: `2px solid ${defaultTheme.colors.gray100}`,
  },
} as const;
type ButtonVariant = keyof typeof buttonVariants;

const buttonSizes = defaultTheme.fontSizes;
type ButtonSize = keyof typeof buttonSizes;

const buttonGap: { [key in ButtonSize]: string } = {
  medium: '10px',
  small: '5px',
  xsmall: '5px',
  xxsmall: '5px',
  large: '10px',
  xlarge: '10px',
  xxlarge: '10px',
};

interface StyledButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  hasPadding?: boolean;
  display?: 'inline-flex' | 'flex';
  disabled?: boolean;
  textAlign?: 'left' | 'right' | 'center';
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: ${({ display = 'flex' }) => display};
  justify-content: center;
  align-items: center;
  gap: ${(props) => buttonGap[props.size]};

  padding: ${({ hasPadding = true }) => (hasPadding ? '9px 25px' : '0')};
  font-size: ${(props) => buttonSizes[props.size]};
  font-weight: ${(props) => buttonVariants[props.variant].fontWeight};
  line-height: 1.5em;
  cursor: pointer;

  border: none;
  color: ${(props) =>
    props.disabled ? props.theme.colors.gray100 : buttonVariants[props.variant].color};
  fill: ${(props) => buttonVariants[props.variant].color};
  outline: ${(props) => buttonVariants[props.variant].outline};
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.white : buttonVariants[props.variant].backgroundColor};
  border-radius: ${(props) => props.theme.radius.medium};
  ${(props) => props.variant !== 'transparent' && `box-shadow: ${props.theme.boxShadows.light}`};
  text-decoration: none;
  cursor: ${(props) => props.disabled && 'not-allowed'};
  text-align: ${({ textAlign = 'center' }) => textAlign};
`;
