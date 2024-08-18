import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { WebsiteLogo } from "../images.path";

const HeaderAppBarCss = {
  boxShadow: 0,
  bgcolor: "transparent",
  backgroundImage: "none",
  mt: 2,
};

const ToolbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: "999px",
  bgcolor: "rgba(255, 255, 255, 0.4)",
  backdropFilter: "blur(24px)",
  maxHeight: 40,
  border: "1px solid",
  borderColor: "divider",
  boxShadow:
    "0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)",
};

const LogoMenuContainerStyle = {
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  ml: "-18px",
  px: 0,
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 0.5,
  marginLeft: "10px",
  marginRight: "10px",
  cursor: "pointer",
};
const logoStyle = {
  width: "58px",
  height: "auto",
};

const MenuItemStyle = { py: "6px", px: "12px" };

const SignInUpContainerStyle = {
  display: { xs: "none", md: "flex" },
  gap: 1,
  alignItems: "center",
};

function Header() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="header-section">
      <AppBar position="fixed" sx={HeaderAppBarCss}>
        <Container maxWidth="lg">
          <Toolbar variant="regular" sx={ToolbarStyle}>
            {/* logo with menu style */}
            <Box className="menu-logo-contain" sx={LogoMenuContainerStyle}>
              <Box className="logo-container" sx={logoContainer}>
                <img
                  src={WebsiteLogo}
                  style={logoStyle}
                  alt="logo of sitemark"
                />
                <Typography variant="h6" color={"#4876EE"}>
                  xtechstack
                </Typography>
              </Box>

              {/* menu box list */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem sx={MenuItemStyle}>
                  <Typography variant="body2" color="text.primary">
                    Features
                  </Typography>
                </MenuItem>
                <MenuItem sx={MenuItemStyle}>
                  <Typography variant="body2" color="text.primary">
                    Testimonials
                  </Typography>
                </MenuItem>
                <MenuItem sx={MenuItemStyle}>
                  <Typography variant="body2" color="text.primary">
                    Highlights
                  </Typography>
                </MenuItem>
                <MenuItem sx={MenuItemStyle}>
                  <Typography variant="body2" color="text.primary">
                    Pricing
                  </Typography>
                </MenuItem>
                <MenuItem sx={MenuItemStyle}>
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>

            {/* signin up desktop container  */}
            <Box
              className="signin-up-btn-container"
              sx={SignInUpContainerStyle}
            >
              <Button color="primary" variant="text" size="small" component="a">
                Sign in
              </Button>
              <Button color="primary" variant="contained" size="small">
                Sign up
              </Button>
            </Box>

            {/* signin up mobile container  */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>

              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <MenuItem>Features</MenuItem>
                  <MenuItem>Testimonials</MenuItem>
                  <MenuItem>Highlights</MenuItem>
                  <MenuItem>Pricing</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      sx={{ width: "100%" }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
