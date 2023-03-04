import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ModalStyle } from "./MovieModelStyle";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  return (
    <Modal open={true} onClose={onClose}>
      <div>
        <Box sx={ModalStyle}>
          <Typography variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Release Date: {movie.release_date}
          </Typography>
          <Typography variant="body1" component="p">
            {movie.overview}
          </Typography>
        </Box>
      </div>
    </Modal>
  );
};
export default MovieModal;
