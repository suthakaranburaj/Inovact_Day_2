import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      py={6}
      textAlign="center"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        mt: 4,
        p: 4,
      }}
    >
      <Typography variant="h6" fontStyle="italic" gutterBottom>
        “Social media is a tool - master it before it masters you”
      </Typography>
      {/* <Typography variant="body1" color="textSecondary">
        Join 10,000+ people who reclaimed their time
      </Typography> */}
      {/* <Button
        variant="outlined"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => window.open("#newsletter", "_blank")}
      >
        Get Weekly Tips
      </Button> */}
    </Box>
  );
};

export default Footer;
