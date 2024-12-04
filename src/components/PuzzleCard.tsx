// import { Puzzle } from '@/util/api';
import { CheckBadgeIcon, HandThumbUpIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { Badge } from './ui/badge';
const Puzzle = 0;
function getDiffBgColor(difficulty: 0 | 1 | 2 | 3) {
    switch (difficulty) {
        case 0:
            return 'bg-green-500';
        case 1:
            return 'bg-amber-500';
        case 2:
            return 'bg-red-500';
        case 3:
            return 'bg-neutral-500';
        default:
            return '';
    }
}

function getDiffLabel(difficulty: 0 | 1 | 2 | 3) {
    switch (difficulty) {
        case 0:
            return 'Easy';
        case 1:
            return 'Medium';
        case 2:
            return 'Hard';
        case 3:
            return 'Challenger';
        default:
            return 'Unranked';
    }
}

// interface Puzzle {
//   puzzleName: string;
//   topics: string[];
//   puzzleDescription: string;
//   pointValue: number;
//   difficulty: 0 | 1 | 2 | 3;
//   authors: string[];
//   solves: number;
//   linkToFiles: string;
//   hints: string[];
//   isSolved: boolean;
// }

function stringToColor(str: string) {
    let hash = 0;
    str.split('').forEach((char) => {
        hash = char.charCodeAt(0) + ((hash << 5) - hash);
    });
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        color += value.toString(16).padStart(2, '0');
    }
    return color;
}

export function PuzzleCard({
    puzzle,
    index,
    openModal,
}: {
    puzzle: Puzzle;
    index: number;
    openModal: (index: number) => void;
}) {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                openModal(index);
            }}
            className={`shadow bg-background min-h-48 border flex flex-col p-5 rounded-lg text-start ${puzzle.teamSolved ? 'brightness-50' : ''
                }`}
        >
            <div className="flex flex-row gap-1">
                {puzzle.topics.map((topic: string) => {
                    return (
                        <Badge key={topic} style={{ background: stringToColor(topic) }}>
                            {topic}
                        </Badge>
                    );
                })}

            </div>
            <div className="flex flex-col my-auto">
                <div className="text-xl font-bold">{puzzle.puzzleName}</div>
                <div className="text-sm text-neutral-500">{puzzle.authors.join(', ')}</div>
            </div>

            <div className="flex flex-row gap-3">
                <span className="flex flex-row">
                    <CurrencyDollarIcon className="size-[24px]" />
                    {puzzle.pointValue}
                </span>

                <span className="flex flex-row">
                    <CheckBadgeIcon className="size-[24px]" />
                    {puzzle.solves}
                </span>

                <span className="flex flex-row">
                    <HandThumbUpIcon className="size-[24px]" />
                    68%
                </span>

                <span className="ms-auto">
                    <Badge variant="default" className={getDiffBgColor(puzzle.difficulty)}>
                        {getDiffLabel(puzzle.difficulty)}
                    </Badge>
                </span>
            </div>
        </button>
    );
}
