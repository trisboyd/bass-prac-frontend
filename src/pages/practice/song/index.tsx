import PracticeSongCard from "../../../components/PracticeSongCard"
import Title from "../../../components/Title"

export default function PracticeSong({data}) {
    return (
        <>
            <Title data={{title: "Practice a Song"}} />
            <PracticeSongCard />
        </>
    )
}