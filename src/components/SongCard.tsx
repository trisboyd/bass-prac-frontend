import { Box, Typography } from "@mui/material";

export const SongCard = ({ song }) => {
  return (
    <Box>
      <Typography variant="h1">{song.title}</Typography>
      <Typography variant="h2">{song.artist}</Typography>
      <Typography variant="h3">{song.album}</Typography>
      <Typography variant="h4">{song.release_date}</Typography>
    </Box>
  );
};
