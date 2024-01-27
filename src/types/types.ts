export type songType = {
    title: String
    artist: String
    album: String
    year: number
    genre: String
    times_played: number
    last_played: number
}

export type songUpdateType = {
    times_played: number
    last_played: number
}

export type buttonType = {
    text: String
    path: String
}