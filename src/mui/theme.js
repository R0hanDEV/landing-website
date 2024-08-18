import { createTheme } from "@mui/material";
import { Palates } from "./mui-themes-component/palates";
import { Typography } from "./mui-themes-component/typography";
import { MuiButtonCustom } from "./mui-themes-component/button";
import { MuiMenuItemCustom } from "./mui-themes-component/menuItem";

const themeOptions = {
    palette: Palates,
    typography: Typography,
    components: {
        // mui button modification
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => MuiButtonCustom(ownerState),
            },
        },

        // mui menu item modification
        MuiMenuItem: {
            styleOverrides: {
                root: () => MuiMenuItemCustom(),
            },
        },
    }
}

const customTheme = createTheme(themeOptions);

export default customTheme;