import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid2 } from "@mui/material";

function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent
        alignItems="center"
        justifyContent="center"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="body2">"{props.item.description}"</Typography>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {props.item.name}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

function ReviewList() {
  var items = [
    {
      name: "John Doe",
      description:
        "They took the time to understand my vision for the project and provided innovative designs. Highly recommend their services!",
    },
    {
      name: "Emily Smith",
      description:
        "The team was professional, creative, and always on top of deadlines. They helped me transform my idea into a beautiful, modern space that exceeds my expectations.",
    },
    {
      name: "Michael Johnson",
      description:
        "Working with this company was an absolute pleasure. They are not only skilled at designing spaces but also excellent at managing the project from start to finish.",
    },
    {
      name: "Sarah Lee",
      description:
        "I’m thrilled with the results! The team was easy to work with, and their commitment to quality was evident in every phase of the project.",
    },
  ];

  return (
    <Grid2
      container
      spacing={2}
      direction={"flex"}
      style={{ display: "flex", justifyContent: "center" }}
      sx={{ alignItems: "space-between", justifyContent: "center" }}
    >
      {items.map((item, i) => (
        <Grid2 size={6} display="flex">
          <BasicCard key={i} item={item} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ReviewList;
