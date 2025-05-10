import React, { useContext } from "react";
import { Box, Container, AppBar, Toolbar } from "@mui/material";
import { ThemeContext } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./theme";
import ThemeToggle from "./context/ThemeToggle";
import ScrollTop from "./components/ScrollTop";
import Header from "./components/Header";
import SectionStatistics from "./components/SectionStatistics";
import SectionDopamine from "./components/SectionDopamine";
import SectionAttention from "./components/SectionAttention";
import SectionComparison from "./components/SectionComparison";
import SectionHero from "./components/SectionHero";
import SectionTestimonial from "./components/SectionTestimonial";
import SectionTips from "./components/SectionTips";
import Footer from "./components/Footer";
// Import other components...

function App() {
  const { mode } = useContext(ThemeContext);
  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        minHeight: "100vh",
        transition: "background 0.3s ease",
      }}
    >
      <AppBar position="static" color="inherit">
        {/* <Toolbar sx={{ justifyContent: "flex-end" }}> */}
          {/* <ThemeToggle /> */}
        {/* </Toolbar> */}
      </AppBar>

      <Container maxWidth="lg">
        <div id="back-to-top-anchor" />
        <Header />
        <SectionStatistics />
        <SectionDopamine />
        <SectionAttention />
        <SectionComparison />
        <SectionTestimonial />
        <SectionTips />
        <Footer />
      </Container>
      <ScrollTop />
    </Box>
  );
}

export default App;
