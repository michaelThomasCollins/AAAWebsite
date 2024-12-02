import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, ImageListItemBar } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList variant="quilted" cols={4} gap={25}>
      {itemData.map((item) => (
        <ImageListItem
          sx={{
            width: "100%",
            height: "100%",
            float: "left",
            position: "relative",
            overflow: "hidden",
          }}
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <a href="/projects">
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                "&:hover": { transform: "scale(1.25)", transition: ".5s ease" },
              }}
              {...srcset(item.img, 121, item.rows, item.cols)}
              style={{ width: "100%" }}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} subtitle={item.author} />
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.adsttc.com/media/images/674b/89eb/c724/b001/870c/3780/slideshow/embracing-modular-design-the-future-of-data-center-architecture_1.jpg?1733003763",
    title: "Modular Design",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.adsttc.com/media/images/674b/8a4d/c724/b001/870c/3784/slideshow/embracing-modular-design-the-future-of-data-center-architecture_1.jpg?1733003855",
    title: "Data Evolution",
  },
  {
    img: "https://images.adsttc.com/media/images/674b/8aad/c724/b001/870c/3787/slideshow/embracing-modular-design-the-future-of-data-center-architecture_9.jpg?1733003956",
    title: "Garage",
  },
  {
    img: "https://images.adsttc.com/media/images/674b/8aad/a36f/6233/c0a6/ec58/slideshow/embracing-modular-design-the-future-of-data-center-architecture_8.jpg?1733003955",
    title: "New Territories",
    author: "3 months",
    cols: 2,
  },
  {
    img: "https://images.adsttc.com/media/images/674b/8a1a/c724/b001/870c/3782/slideshow/embracing-modular-design-the-future-of-data-center-architecture_1.jpg?1733003812",
    title: "Kowloon Bay Apartments",
    cols: 2,
  },
  {
    img: "https://images.adsttc.com/media/images/674b/8a70/c724/b001/870c/3785/slideshow/embracing-modular-design-the-future-of-data-center-architecture_1.jpg?1733003892",
    title: "Framework",
    author: "@magickwan",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.adsttc.com/media/images/674b/8a14/c724/b001/870c/3781/slideshow/embracing-modular-design-the-future-of-data-center-architecture_1.jpg?1733003803",
    title: "Data Center Design",
  },
  {
    img: "https://images.adsttc.com/media/images/674b/8a49/c724/b001/870c/3783/slideshow/embracing-modular-design-the-future-of-data-center-architecture_1.jpg?1733003853",
    title: "Fern",
  },
  {
    img: "https://images.adsttc.com/media/images/674b/89e4/c724/b001/870c/377f/slideshow/embracing-modular-design-the-future-of-data-center-architecture_1.jpg?1733003756",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.adsttc.com/media/images/6749/cb6c/a36f/6233/c0a6/e9c9/slideshow/king-abdullah-financial-district-metro-station-zaha-hadid-architects_2.jpg?1732889496",
    title: "Financial District",
  },
  {
    img: "https://images.adsttc.com/media/images/6749/cb80/a36f/6233/c0a6/e9cc/slideshow/king-abdullah-financial-district-metro-station-zaha-hadid-architects_7.jpg?1732889519",
    title: "Spacecraft",
  },
  {
    img: "https://images.adsttc.com/media/images/6749/cb7e/c724/b001/870c/350c/slideshow/king-abdullah-financial-district-metro-station-zaha-hadid-architects_11.jpg?1732889523",
    title: "Station",
    cols: 2,
  },
];
