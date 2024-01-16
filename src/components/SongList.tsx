import { Container } from "@mui/material";
import { useGet } from "../api/songsApi";
import { apiUrl } from "../constants/apiUrl";
import { songs as songsData } from "../constants/fakeData";
import { SongCard } from "./SongCard";

// const songs = useGet(apiUrl);

const songs = songsData;

export function SongList() {
  return (
  <Container>
    {songs.map((song) => {
        return (
            <SongCard song={song} />
        )
    })}
  </Container>
)}
