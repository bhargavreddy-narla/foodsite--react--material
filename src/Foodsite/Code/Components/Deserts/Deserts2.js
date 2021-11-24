import * as React from "react";
import Card from "@mui/material/Card";
import { motion } from "framer-motion";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const DesertItems = ({ items }) => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 1000 }}
      transition={{ duration: 2, type: "spring", stiffness: 20 }}
      whileHover={{ scale: 1.2 }}
    >
      <Card sx={{ maxWidth: 300 }} className="desertCards">
        <CardActionArea>
          <CardMedia component="img" height="200" image={items.imageUrl} />
          <CardContent>
            <Typography style={{ fontSize: 30 }}>{items.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {items.description}
            </Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default DesertItems;
