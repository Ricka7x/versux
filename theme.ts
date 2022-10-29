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
  PURPLE = '#5B53FF',
}

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
    primary: COLORS.BLACK,
    secondary: COLORS.LIGHT_GREY,
    highlight: COLORS.GOLD,
    muted: COLORS.MID_GREY,
    disabled: COLORS.LIGHT_GREY,
    light: COLORS.LIGHT_GREY,
    link: COLORS.PURPLE,
  },
  fonts: {
    ...base.fonts,
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, system-ui, sans-serif',
  },

  text: {
    title: {
      fontFamily: 'heading',
      fontWeight: 600,
      fontSize: ['40px', '40px', '40px', '60px'],
    },

    body: {
      fontFamily: 'heading',
      fontWeight: 400,
      fontSize: '18px',
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
      color: 'muted',
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
      padding: 2,
      borderRadius: 40,
      boxShadow: '0 10px 28px rgba(25, 25, 25, 0.05)',
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
