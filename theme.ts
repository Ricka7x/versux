import { base } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

enum COLORS {
  WHITE = '#FFFFFF',
  BLACK = '#191919',
  GOLD = '#EFD19F',
  RED = '#FF7878',
  LIGHT_GREY = '#F4F4F4',
  MID_GREY = '#AEAEAE',
  GREY = '#6B6A6A',
  TRANSPARENT = '#FFFFFF00',
  PURPLE = '#866FFF',
  DARK_PURPLE = '#372948',
  CYAN = '#20C2D7',
  STEEL_GREY = '#242130',
  EBONY_CLAY = '#2C2842',
}

console.log(base);

export const theme: Theme = {
  ...base,
  colors: {
    ...base.colors,
    error: COLORS.RED,
    success: COLORS.GOLD,
    black: COLORS.BLACK,
    white: COLORS.WHITE,
    grey: COLORS.GREY,
    transparent: COLORS.TRANSPARENT,
    primary: COLORS.PURPLE,
    secondary: COLORS.LIGHT_GREY,
    highlight: COLORS.CYAN,
    muted: COLORS.MID_GREY,
    disabled: COLORS.LIGHT_GREY,
    light: COLORS.LIGHT_GREY,
    link: COLORS.PURPLE,
    background: COLORS.STEEL_GREY,
    card: COLORS.EBONY_CLAY,
  },
  fonts: {
    ...base.fonts,
    body: 'Montserrat, system-ui, sans-serif',
    heading: 'Montserrat, system-ui, sans-serif',
  },

  text: {
    default: {
      fontSize: 2,
      lineHeight: 1.8,
      color: 'white',
    },
    h1: {
      fontFamily: 'heading',
      fontWeight: 800,
      fontSize: [50, 50, 50, 80],
      lineHeight: [1.2, 1.3],
      color: 'white',
    },

    h2: {
      fontFamily: 'heading',
      fontWeight: 800,
      fontSize: [40, 40, 40, 50],
      lineHeight: [1.2, 1.3],
      color: 'white',
    },

    h3: {
      fontFamily: 'heading',
      fontWeight: 800,
      fontSize: [30, 30, 30, 30],
      lineHeight: [1.2, 1.3],
      color: 'white',
    },

    body: {
      fontFamily: 'heading',
      fontWeight: 400,
      fontSize: 16,
      color: 'grey',
      lineHeight: 1.8,
    },
    link: {
      color: 'link',
      cursor: 'pointer',
      display: 'inline',
    },
    muted: {
      color: 'muted',
    },
    caps: {
      textTransform: 'uppercase',
      color: 'muted',
      letterSpacing: '1.3px',
    },
    error: {
      fontSize: 0,
      color: 'error',
    },
    caption: {
      color: 'muted',
      fontSize: 1,
    },
    white: {
      color: 'white',
    },
    lead: {
      fontSize: 3,
    },
  },

  forms: {
    label: {
      fontSize: 2,
    },
    input: {
      height: 58,
      padding: 3,
      color: 'grey',
      borderColor: 'light',
      borderRadius: 10,
      '&:focus': {
        borderColor: 'primary',
        outline: 'none',
      },
    },
    select: {
      height: 58,
      padding: 3,
      color: 'grey',
      borderColor: 'grey',
      borderRadius: 8,
      '&:focus': {
        borderColor: 'primary',
        outline: 'none',
      },
    },
    textarea: {
      padding: 3,
      color: 'lightgrey',
      borderColor: 'gray',
      borderRadius: 8,
      '&:focus': {
        borderColor: 'primary',
        outline: 'none',
      },
    },

    checkbox: {
      cursor: 'pointer',
    },
    slider: {
      bg: 'muted',
    },
  },

  buttons: {
    hero: {
      cursor: 'pointer',
      color: 'background',
      height: 74,

      borderRadius: 37,
      transition: '.2s',
      bg: 'highlight',
      '&:hover': {
        bg: 'highlight',
        color: 'black',
      },
    },

    menu: {
      cursor: 'pointer',
      color: 'background',
      height: 52,
      width: 160,
      borderRadius: 26,
      transition: '.2s',
      bg: 'highlight',
      '&:hover': {
        bg: 'highlight',
        color: 'black',
      },
    },

    primary: {
      cursor: 'pointer',
      color: 'background',
      height: 58,
      width: 307,
      borderRadius: 37,
      transition: '.2s',
      bg: 'black',
      '&:hover': {
        bg: 'highlight',
        color: 'black',
      },
    },

    secondary: {
      cursor: 'pointer',
      color: 'background',
      height: 58,
      borderRadius: 10,
      bg: 'secondary',
      '&:hover': {
        bg: 'muted',
      },
    },
  },

  links: {
    nav: {
      cursor: 'pointer',
      px: 4,
      py: 2,
      fontWeight: 'normal',
      textTransform: 'capitalize',
      color: 'white',
      '&:hover': {
        color: 'highlight',
      },
      '&:active': {
        color: 'highlight',
      },
    },
  },
  cards: {
    primary: {
      padding: 4,
      borderRadius: 40,
      boxShadow: '0 10px 28px rgba(25, 25, 25, 0.05)',
      backgroundColor: 'card',
      textAlign: 'center',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },

  styles: {
    hr: {
      color: 'light',
    },

    spinner: {
      color: 'black',
    },
    ...base.styles,
  },
};
