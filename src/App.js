import "./App.css";
import Button from "@mui/material/Button";
import * as React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import VideoCarousel from "./VideoCarousel";
import ReviewList from "./ReviewList";
import SocialLinks from "./SocialLinks";
import ProjectList from "./ProjectList";
import Divider from "@mui/material/Divider";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import pmq from "./PMQ.jpg";
import Contact from "./Contact";
function App() {
  return (
    <div>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <ResponsiveAppBar></ResponsiveAppBar>
      <VideoCarousel></VideoCarousel>

      <Container>
        <Box display="flex" style={{ marginTop: 40 }}>
          <Typography variant="h4" gutterBottom>
            Studio
          </Typography>
        </Box>

        <Grid2 container spacing={2}>
          <Grid2 size={8} display="flex">
            <img
              style={{ maxWidth: "100%" }}
              src={pmq}
              alt="PMQ Studio"
              loading="lazy"
            />
          </Grid2>
          <Grid2
            size={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <CardContent
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom variant="body2">
                  Architecture and All is a boutique architecture firm based at
                  PMQ (Police Married Quarters) in Hong Kong, where it has been
                  operating for the past three years. The company is a small,
                  dynamic team with a strong focus on interior design, offering
                  creative and tailored solutions for various projects. They are
                  known for their expertise in transforming spaces with a blend
                  of functionality, aesthetics, and sustainability. Drawing
                  inspiration from both local culture and modern design trends,
                  Architecture and All aims to create spaces that are not only
                  visually appealing but also enhance the user experience.
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  Magic Kwan
                </Typography>
                {/* </Box> */}
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>

        <Box display="flex" style={{ marginTop: 40 }}>
          <Typography variant="h4" gutterBottom>
            Reviews
          </Typography>
        </Box>
        <Box
        // justifyContent="flex-start"
        // alignItems="flex-start"
        >
          <ReviewList />
        </Box>
        <Box display="flex" style={{ marginTop: 40 }}>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
        </Box>
        <Box justifyContent="center" alignItems="center">
          <ProjectList />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: 40 }}
        >
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: 40 }}
        >
          <Contact id="contact"></Contact>
        </Box>
        <Divider />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ marginTop: 20, marginBottom: 20 }}
        >
          <SocialLinks />
        </Box>
        {/* <Grid2
          container
          display="flex"
          alignItems="center"
          style={{ marginTop: 20 }}
        >
          <Grid2 size={6}>
            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <Typography variant="h5" gutterBottom>
                Architecture And All
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <SocialLinks />
            </Box>
          </Grid2>
        </Grid2> */}
      </Container>
    </div>
  );
}

export default App;
