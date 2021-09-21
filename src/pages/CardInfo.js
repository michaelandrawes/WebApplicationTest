import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardInfo = ({ title, img, desc, infoLink }) => {
  return (
    <Card className="CARD__MAIN">
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={infoLink} className="btn btn-small btn-info" target="_blank">
          Learn More
        </a>
      </CardActions>
    </Card>
  );
};

export default CardInfo;
