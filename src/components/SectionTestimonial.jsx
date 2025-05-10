import React from "react";
import { Box, Typography, Avatar, Grid } from "@mui/material";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Digital Marketer",
    text: "After implementing these tips, I regained 10 hours/week and finally read those books collecting dust on my shelf!",
    avatar: "https://source.unsplash.com/random/800x600?face,person",
  },
  {
    name: "Mike R.",
    role: "Software Developer",
    text: "My focus improved dramatically once I stopped the endless scrolling. My productivity has never been better!",
    avatar: "https://source.unsplash.com/random/800x600?face,man",
  },
];

const SectionTestimonial = () => (
  <Box my={10}>
    <Typography
      variant="h4"
      textAlign="center"
      gutterBottom
      sx={{ fontWeight: 700 }}
    >
      Real People, Real Results
    </Typography>
    <Grid container spacing={4} mt={4}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.9)",
              borderRadius: 4,
              p: 4,
              boxShadow: 3,
              height: "100%",
            }}
          >
            <Typography variant="body1" paragraph sx={{ fontStyle: "italic" }}>
              "{testimonial.text}"
            </Typography>
            <Box display="flex" alignItems="center" mt={3}>
              <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56 }} />
              <Box ml={2}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default SectionTestimonial;
