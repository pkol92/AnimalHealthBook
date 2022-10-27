export const defaultTheme = {
  colors: {
    // all colors
    black: '#0D0D0D',
    navy: '#004899',
    magenta: '#E6007E',
    white: '#FFFFFF',
    gray100: '#C6C6C6',
    green: '#028d60',
    transparent: '#ffffff00',
  },
  zIndex: {
    modal: 10,
    background: -1,
    button: 2,
  },
  boxShadows: { light: '4px 4px 8px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.04)' },
  gradient: {},
  radius: {
    none: '0',
    xsmall: '2px',
    small: '5px',
    medium: '10px',
  },
  fontSizes: {
    xxsmall: '10px',
    xsmall: '11px',
    small: '13px',
    medium: '16px',
    large: '18px',
    xlarge: '24px',
    xxlarge: '36px',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  breakpoints: {
    xs: 480,
    s: 768,
    m: 900,
    l: 1200,
    xl: 1600,
  },
  fontFamily: {
    primary: "'Lato', sans-serif",
  },
} as const;

export type ThemeType = typeof defaultTheme;
