type NoobDeveloper = {
    name: string
}

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

enum Level {
    Junior = "Junior",
    Mid = "Mid",
    Senior = "Senior"
}

type NextLevelDev = JuniorDeveloper & {
    leadershipExperience: number;
    // level: "junior" | "mid" | "senior"; recommended
    level: Level;
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Rok",
    expertise: "Javascript",
    experience: 6
}

const developer: NextLevelDev = {
    name: "Rio",
    expertise: "Typescript",
    experience: 2,
    leadershipExperience: 1,
    level: Level.Senior
}