export const theme = {
  palette: {
    primary: {
      main: '#6200EE',
      light: '#9e47ff',
      dark: '#0000ba',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#03DAC6',
      light: '#66fff9',
      dark: '#00a896',
      contrastText: '#000000',
    },
    background: {
      default: '#f4f5fd',
      paper: '#FFFFFF',
      hover: '#eac2c2',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h5: {
      fontWeight: 600,
      color: '#333',
      fontSize: '20px',
    },
    body1: {
      color: '#555',
    },
  },
  shape: {
    borderRadius: '8px',
  },
  shadows: {
    level1: '0px 1px 3px rgba(0,0,0,0.1)',
    level2: '0px 3px 6px rgba(0,0,0,0.15)',
    level3: '0px 5px 10px rgba(0,0,0,0.2)',
  },
};

export const buttonCSS=(theme) => ({
              backgroundColor: theme.palette.primary.main, padding:'10px 20px 10px 20px', borderRadius:'20px', 
              color:theme.palette.primary.contrastText
  })
  export const inputCSS = (theme) =>({background:theme.palette.background.default, padding:'5px 0px 5px 10px', 
                      borderRadius:'20px', fontSize:'20px'})
