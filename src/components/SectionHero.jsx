import React from "react";
import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const SectionHero = () => {
  const theme = useTheme();

  return (
    <Box py={10} textAlign="center">
      <Typography
        variant="h2"
        fontWeight={800}
        gutterBottom
        sx={{
          background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `${pulse} 3s ease-in-out infinite`,
        }}
      >
        Digital Wellness Revolution
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Reclaim Your Mind from Social Media Addiction
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
        Start Your Detox Journey
      </Button>
    </Box>
  );
};

export default SectionHero;
