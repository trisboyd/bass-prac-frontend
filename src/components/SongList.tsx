import { Container, Grid } from "@mui/material";
import { useGet } from "../api/songsApi";
import { apiUrl } from "../constants/apiUrl";
import { songs as songsData } from "../constants/fakeData";
import { SongCard } from "./SongCard";

// const songs = useGet(apiUrl);

const songs = songsData;

export function SongList() {
  return (
    <Container maxWidth= 'xl' sx={{display: 'flex', justifyContent: 'center'}}>
        <Grid container spacing={2}>
        {songs.map((song) => {
            return (
            <Grid item xs={10} sm={6} md={4} lg={3}>
                <SongCard song={song} />
            </Grid>
            );
        })}
        </Grid>
    </Container>
  );
}
