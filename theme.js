import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Lexend Deca"
    },
    palette: {
        primary: {
            main: '#6c5fc7',
            light: '#897fd2',
            dark: '#393596',
            contrastText: "#fff"
        },
        secondary: {
            main: "#2C394A",
            light: "#566376",
            dark: "#031322",
            contrastText: "#fff",
        },
    },
    drawerWidth: 256,
});

export default theme