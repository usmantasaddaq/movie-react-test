import React from "react";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { base_image_url } from "../Services/ApiData";
import Card from "@mui/material/Card";

const MovieCard = ({ movie, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={`${base_image_url}${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Release Date: {movie.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
