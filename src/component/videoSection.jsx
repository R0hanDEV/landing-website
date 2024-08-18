import { alpha, Container, Typography } from "@mui/material";
import videodemo from "../assets/videos/demo.mp4";

const VideoContainerCss = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  //   pb: { xs: 5, sm: 10 },
  gap: "3vh",
};
const VideoSection = () => {
  return (
    <div className="videoSection container">
      <Container sx={VideoContainerCss}>
        <div className="text-center flex justify-center">
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Made with Our tools
          </Typography>
        </div>

        {/* video section */}
        <video
          controls
          className="w-full h-auto rounded-lg shadow-lg"
          src={videodemo}
          style={{
            mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            height: { xs: 180, sm: 700 },
            width: "100%",
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor: alpha("#BFCCD9", 0.5),
            padding: "15px",
            boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`,
          }}
        >
          Your browser does not support the video tag.
        </video>
      </Container>
    </div>
  );
};

export default VideoSection;
