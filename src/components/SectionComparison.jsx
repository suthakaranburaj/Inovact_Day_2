import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const SectionComparison = () => (
  <Box my={6}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={5} textAlign="center">
        <PersonIcon style={{ fontSize: 60 }} color="primary" />
      </Grid>
      <Grid item xs={2} textAlign="center">
        <CompareArrowsIcon style={{ fontSize: 40 }} />
      </Grid>
      <Grid item xs={5} textAlign="center">
        <PersonIcon style={{ fontSize: 60 }} color="secondary" />
      </Grid>
    </Grid>
    <Typography variant="h5" mt={4} textAlign="center">
      You see someone’s highlight reel and compare it to your behind-the-scenes.
    </Typography>
  </Box>
);
export default SectionComparison;
        