import React from "react";
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const SectionAttention = () => (
  <Box my={6} textAlign="center">
    <AccessTimeIcon color="primary" style={{ fontSize: 60 }} />
    <Typography variant="h5" mt={2}>
      Fast scrolling trains your brain to crave quick fixes — reducing focus
      over time.
    </Typography>
  </Box>
);

export default SectionAttention;
