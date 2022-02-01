import React from "react";
import "./Footer1.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer1 = () => {
  return (
    <div className="footer">
      <Box>
        <Grid item xs={12} container className="footerLinks">
          <Grid xs={3} className="footerLinks--row1">
            <h3>COMPANY</h3>
            <span>About us</span>
            <span>Blog</span>
            <span style={{ marginBottom: "1rem" }}>Contact</span>
          </Grid>
          <Grid xs={3} className="footerLinks--row1">
            <h3>FOR FOODIES</h3>
            <span>Community</span>
            <span>Help</span>
            <span>Mobile app</span>
          </Grid>
          <Grid xs={3} className="footerLinks--row1">
            <h3>FOR YOU</h3>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </Grid>
          <Grid xs={3} className="footer--Social--Icons">
            <h3>FOLLOW US ON </h3>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <YouTubeIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer1;
