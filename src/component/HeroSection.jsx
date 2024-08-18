import { Stack, Typography, Container } from "@mui/material";
import { Palates } from "../mui/mui-themes-component/palates";

const HeroSectionStyle = {
  width: "100%",
  backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
  backgroundSize: "100% 60%",
  backgroundRepeat: "no-repeat",
};

const HeroSection = () => {
  return (
    <div className="hero-section" style={HeroSectionStyle}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Video tools&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: Palates.primary.main,
              }}
            >
              Online
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            All-in-one easy-to-use online video tools
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default HeroSection;
