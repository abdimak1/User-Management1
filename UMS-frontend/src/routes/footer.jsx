import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--bl)",
        color:"var(--wh)"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="var(--wh)" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="var(--wh)">
              We built simple account management system
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="var(--wh)" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="var(--wh)">
               lideta, addisababa, Ethiopia
            </Typography>
            <Typography variant="body2" color="var(--wh)">
              Email: abdi@simpleAccountManagement.com
            </Typography>
            
            <Typography variant="body2" color="var(--wh)">
              Phone: +251 965143905
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="var(--wh)" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="var(--wh)" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              www.simpleAccountManagement.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}