import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '##000000', 
    },
    
  },
components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',  
          cursor: 'default',      
        },
      },
    },
  },

});

export default theme;