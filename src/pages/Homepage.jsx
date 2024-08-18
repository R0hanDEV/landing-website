import { Box } from "@mui/material";
import Footer from "../component/Footer";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import TapButton from "../component/TapButton";
import VideoSection from "../component/videoSection";
import { useState } from "react";

const Homepage = () => {
  const [tabSelected, setTabSelected] = useState("");
  const buttons = [
    { id: "tab1", title: "Loop" },
    { id: "tab2", title: "Reverse" },
    { id: "tab3", title: "slow motion" },
    { id: "tab4", title: "speed" },
  ];

  return (
    <div className="home-page-section">
      <Header />
      <HeroSection />
      <VideoSection />

      {/* video tab selection */}
      <Box
        className="video-tab-collection"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexWrap: "wrap",
          gap: "3vh",
          pt: { xs: 2, sm: 3 },
          pb: { xs: 1, sm: 1 },
        }}
      >
        {buttons.map((button) => (
          <TapButton
            key={button.id}
            id={button.id}
            title={button.title}
            tabSelected={tabSelected}
            setTabSelected={setTabSelected}
          />
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default Homepage;
