import { alpha, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const TapButton = ({ id, title, setTabSelected, tabSelected }) => {
  const handleClick = () => {
    setTabSelected(id); // Directly set the id as the selected tab
  };

  return (
    <div className="tap-button-section">
      <Box
        id={id}
        sx={{
          width: "100%",
          backgroundSize: "cover",
          borderRadius: "10px",
          outline: `1px solid ${alpha("#BFCCD9", 0.5)}`,
          padding: "15px",
          boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`,
          cursor: "pointer",
          color: id === tabSelected ? "white" : "black", // Fallback to black when not selected
          backgroundColor: id === tabSelected ? "#262628" : "#FFFFFF", // Default to white background
          transition: "background-color 0.3s ease", // Add smooth transition
        }}
        onClick={handleClick}
      >
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
};

TapButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tabSelected: PropTypes.string.isRequired,
  setTabSelected: PropTypes.func.isRequired,
};

export default TapButton;
