import React from "react";
import Carousel from "react-material-ui-carousel";
import people from "./archides.jpeg";
import dragon from "./house.jpg";
import convention from "./PMQ.jpg";

function VideoCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      src: people,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      src: convention,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      src: dragon,
    },
  ];

  return (
    <Carousel animation="slide" duration={1000} changeOnFirstRender={true}>
      {items.map((item, i) => (
        <img src={item.src} width="100%" alt={item.name} key={i} />
      ))}
    </Carousel>
  );
}

export default VideoCarousel;
