import React from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

const SectionDopamine = () => (
  <Box my={10} textAlign="center">
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <FavoriteIcon color="secondary" style={{ fontSize: 60 }} />
    </motion.div>
    <Typography variant="h5" mt={2} sx={{ fontWeight: 600 }}>
      Likes & comments trigger dopamine releases comparable to
      <Box component="span" color="secondary.main">
        {" "}
        gambling wins
      </Box>
    </Typography>
    <Typography variant="body1" mt={2} color="text.secondary">
      Studies show social media engagement activates the same neural pathways as
      substance addiction
    </Typography>
  </Box>
);

export default SectionDopamine;
