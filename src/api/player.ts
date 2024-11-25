interface ChartDataPoint {
    minute: string;
    points: number;
}

export interface User {
    TeamName:string;
    username: string[];
    puzzleRoundPoint: number;
    battleRoundPoint: number;
    scenarioPoint: number;
    totalPoints: number;
    pointHistory: ChartDataPoint[];
}

const userCardData: User = {
    TeamName:'strong arm',
    username: ['player1','player2'],
    puzzleRoundPoint: 100000,
    battleRoundPoint: 100,
    scenarioPoint: 10000,
    totalPoints: 100,
    pointHistory: [
        { minute: '1', points: 186 },
        { minute: '2', points: 305 },
        { minute: '3', points: 214 },
        { minute: '4', points: 237 },
        { minute: '5', points: 73 },
        { minute: '6', points: 209 },
        { minute: '7', points: 195 },
        { minute: '8', points: 250 },
        { minute: '9', points: 175 },
        { minute: '10', points: 280 },
        { minute: '11', points: 220 },
        { minute: '12', points: 305 },
        { minute: '13', points: 150 },
        { minute: '14', points: 190 },
        { minute: '15', points: 160 },
    ]
};


export async function fetchUserCardData(): Promise<User> {
    // Simulate a 20ms delay to mimic an API response
    return( userCardData);
}
