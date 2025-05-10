import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { BarChart, Timeline, Psychology } from "@mui/icons-material";

const stats = [
  {
    icon: <BarChart fontSize="large" />,
    value: "4.8hr",
    label: "Daily Average Usage",
  },
  {
    icon: <Timeline fontSize="large" />,
    value: "72%",
    label: "Report Anxiety",
  },
  {
    icon: <Psychology fontSize="large" />,
    value: "3.2x",
    label: "Depression Risk",
  },
];

const SectionStatistics = () => (
  <Box
    my={10}
    sx={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: 4, p: 4 }}
  >
    <Grid container spacing={4}>
      {stats.map((stat, index) => (
        <Grid item xs={12} md={4} key={index} textAlign="center">
          <Box sx={{ color: "primary.main", mb: 2 }}>{stat.icon}</Box>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {stat.value}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {stat.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default SectionStatistics;
