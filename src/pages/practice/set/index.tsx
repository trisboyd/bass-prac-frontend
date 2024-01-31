import { songs } from '../../../constants/fakeData';
import Set from '../../../components/Set';

export default function PracticeSet() {

    const songData = songs.slice(0, 2)

    return (
        <Set data={songData} />
    )
}