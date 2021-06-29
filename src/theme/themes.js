import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import purple from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';


export const darkTheme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark',
            primary: purple,
            secondary: pink,
            contrastThreshold: 3,
            tonalOffset: 0.2,
        }
    })
);