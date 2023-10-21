/** @type {import('tailwindcss').Config} */
export const corePlugins = {
  preflight: false,
};
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  extend: {
    colors: {
  
      onNeutralBg: 'var(--onNeutralBg)',
      neutralBg: 'var(--neutralBg)',
      onPrimaryBg: 'var(--onPrimaryBg)',
      primaryBg: 'var(--primaryBg)',
      primary: 'var(--primary)',  
      lightgreen:'#00AA7F',
      darkgreen:'#06513B',
      grayblack:'#595656',

    },
      flexCenter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      backgroundImage: {
        hero_img_large: "url('../images/bg_wave.svg')",
        hero_img: "url('../images/bg_mobile.svg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
    }
};
export const plugins = [];
