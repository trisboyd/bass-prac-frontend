import { CardContent, Typography, useTheme } from "@mui/material";

export const SongCard = ({ song }) => {
  const theme = useTheme();

  const styles = {
    card: {
        background: 'rgb(82, 250, 136, 0.2)',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '3px 3px 3px gray',
    },
    text: {
      color: theme.palette.primary.light,
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
  };

  return (
      <CardContent sx={styles.card}>
        <Typography variant="h2" sx={styles.text}>
          {song.title}
        </Typography>
        <Typography variant="h3" sx={styles.text}>
          {song.artist}
        </Typography>
        <Typography variant="h4" sx={styles.text}>
          {song.album}
        </Typography>
        <Typography variant="h5" sx={styles.text}>
          {song.year}
        </Typography>
      </CardContent>
  );
};
