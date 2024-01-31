import { CardContent, Typography, Container } from "@mui/material";
import MenuButton from "./MenuButton";
import { useTheme } from "@mui/material";
import { useState } from "react";

export default function SetCard({ data }) {
  const song = data;
  const theme = useTheme();

  const [played, setPlayed] = useState(false);

  const handleSetSongClick = () => {
    setPlayed(true);
  };

  const buttonData = {
    text: "Finished",
    onClick: () => handleSetSongClick(),
    width: "25%",
  };

  const styles = {
    card: {
      border: "1px solid white",
      opacity: played ? '0.5' : '1',
    },
    text: {
      color: theme.palette.primary.light,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <CardContent>
      <Container disableGutters sx={styles.container}>
        <Typography variant="h2" sx={styles.text}>
          {song.title}
        </Typography>
        <Typography variant="h3" sx={styles.text}>
          {song.artist}
        </Typography>
      </Container>
      <MenuButton data={buttonData} />
    </CardContent>
  );
}
