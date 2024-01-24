import { SongList } from "../../components/SongList";
import Title from "../../components/Title";

export default function Songs() {
  return (
    <>
      <Title data={{ title: "All Songs" }} />
      <SongList />
    </>
  );
}
