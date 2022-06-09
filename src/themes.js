import React from 'react'
import {createTheme , ThemeProvider } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#004EA3'
        },
        secondary: {
            main: '#002244'
        }
    },
    typography: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 18, 
        h1: {
            fontSize: "25px",
         fontWeight: 700,
         lineHeight: '28px'

        },
        h2: {
            fontSize: '18px',
         lineHeight: '21px'

        },
        h3: {
            fontSize: '16px'
        },
        h4: {
            fontSize: '14px',
            lineHeight: '16.23px',
         }
   
    },
    shape: {
        borderRadius: 0
    },
    breakpoints: {
        values: {
            xl: 1142
        }
    }
})

export default function MuiTheme({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}