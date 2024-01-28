import { Button, CardContent, Container, Typography, useTheme } from "@mui/material";
import { songs } from "../constants/fakeData";
import MenuButton from "./MenuButton";

export default function PracticeSongCard() {
  const theme = useTheme();

  const song = songs[0];

  const songRepetitionData = {
    text: 'Log Song Repetition',
    onClick: () => console.log('Log Song Repetition'),
  }

  const styles = {
    card: {
      background: "rgb(0, 0, 0, 0.8)",
      border: "1px solid black",
      borderRadius: "10px",
      boxShadow: "3px 3px 3px gray",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    text: {
      color: theme.palette.primary.light,
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      textAlign: "center",
    },
  };

  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center" }}>
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
        <MenuButton data={songRepetitionData}/>
      </CardContent>
    </Container>
  );
}
