import { createTheme } from "@mui/material/styles";
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
    style: ['normal']
})

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily
    }
})

export default theme;