import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grow, // Add this import
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const tips = [
  "Turn off notifications",
  "Set time limits",
  "Detox days",
  "Follow inspiring people only",
];

const SectionTips = () => (
  <Box my={10}>
    <Typography
      variant="h4"
      textAlign="center"
      gutterBottom
      sx={{ fontWeight: 700 }}
    >
      Science-Backed Strategies
    </Typography>
    <List>
      {tips.map((tip, idx) => (
        <Grow in timeout={(idx + 1) * 500} key={idx}>
          <ListItem
            sx={{
              backgroundColor: "rgba(255,255,255,0.9)",
              mb: 2,
              borderRadius: 2,
              boxShadow: 1,
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <ListItemIcon>
              <CheckCircleIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary={tip}
              primaryTypographyProps={{ variant: "h6" }}
            />
          </ListItem>
        </Grow>
      ))}
    </List>
  </Box>
);

export default SectionTips;
