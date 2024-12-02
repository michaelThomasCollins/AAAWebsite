import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import SocialLinks from "./SocialLinks";
import ResponsiveAppBar from "./ResponsiveAppBar";
import VideoCarousel from "./VideoCarousel";

function Project(props) {
  return (
    <Container>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <ResponsiveAppBar></ResponsiveAppBar>

      <VideoCarousel></VideoCarousel>

      <Box display="flex" style={{ marginTop: 40 }}>
        <Typography variant="h4" gutterBottom>
          West Kowloon Apartments
        </Typography>
      </Box>
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
          <Typography variant="body1" gutterBottom>
            One major architectural development underway in West Kowloon is the
            West Kowloon Cultural District (WKCD). The district is a vast,
            ambitious urban project designed to transform the waterfront into a
            cultural and artistic hub for Hong Kong. With its blend of modern
            architecture and cultural significance, it is poised to become a key
            landmark in the city’s ongoing urban evolution. The WKCD covers
            approximately 40 hectares and is strategically located along
            Victoria Harbour.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The development includes spaces for performing arts venues, museums,
            galleries, and other cultural institutions. Among its key components
            is the M+ Museum, a contemporary visual culture museum, which is set
            to become one of the largest of its kind in the region.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The Xiqu Centre, which houses traditional Chinese opera
            performances, and the Frederic Leighton-designed Lyric Theatre are
            also notable parts of this ongoing development. Architecturally, the
            WKCD’s designs are a combination of contemporary and sustainable
            features. Its master plan incorporates green spaces, such as the
            West Kowloon Art Park, which will serve as a public space for both
            locals and visitors.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The buildings and open spaces are designed to create a fluid
            relationship between art, nature, and the city’s skyline. The West
            Kowloon Cultural District is set to not only become a cultural hub
            for Hong Kong but also a major tourist destination, bringing new
            energy to the West Kowloon area. Its architectural developments and
            cultural offerings aim to elevate the city’s standing as a global
            center for arts and culture.
          </Typography>
          {/* </Box> */}
        </CardContent>
      </Card>

      <Divider />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <SocialLinks />
      </Box>
    </Container>
  );
}

export default Project;
