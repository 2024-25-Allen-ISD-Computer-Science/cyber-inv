import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { BiSolidCoin } from "react-icons/bi";





interface puzzleCardProps {
  puzzleName: string;
  topic: string[];
  pointVal: number;
  diff: 0 | 1 | 2 | 3;
}
export interface puzzleCard {
  isSolved: boolean;
  puzzleName: string;
  topic: string[];
  pointVal: number;
  diff: 0 | 1 | 2 | 3;
  desc: string;
}
export default function PuzzleCard({ isSolved, puzzleName, topic, pointVal, diff, desc }: puzzleCard) {
  if (isSolved) {
    <SolvedPuzzleCard
      puzzleName={puzzleName}
      topic={topic}
      pointVal={pointVal}
      diff={diff}
    />
  }
  return (
    <Dialog>
      <DialogTrigger>
        <NonSolvedPuzzleCard
          puzzleName={puzzleName}
          topic={topic}
          pointVal={pointVal}
          diff={diff}
        />
      </DialogTrigger>
      <DialogContent className="max-w-4xl min-w-4xl min-h-1/3 max-h-1/3">
        <DialogHeader>
          <DialogTitle>{puzzleName}</DialogTitle>
          <DialogDescription className="w-full h-full">
            {desc}
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-fit inline-flex gap-2">
        <Input/>
        <Button/>
        </div>
      </DialogContent>

    </Dialog>

  );
}

//This is the card that is presented when the user has not solved
function NonSolvedPuzzleCard({ puzzleName, topic, pointVal, diff }: puzzleCardProps) {
  return (
    <Card className=" min-w-72 max-w-72 min-h-48 max-h-48">
      <CardHeader>
        <CardDescription className="font-medium text-lg flex justify-between">
          <div>{topic}</div>
          <div>{diff}</div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl line-clamp-1 overflow-hidden text-ellipsis">
          {puzzleName}
        </div>
      </CardContent>
      <CardFooter className="inline-flex w-full">
      <BiSolidCoin className="size-6 fill-yellow-300"/>
        {pointVal}
      </CardFooter>
    </Card>
  )
}

//This is the card that is presented when the user has been solved
function SolvedPuzzleCard({ puzzleName, topic, pointVal, diff }: puzzleCardProps) {
  return (
    <Card className=" min-w-72 max-w-72 min-h-48 max-h-48 opacity-50">
      <CardHeader>
        <CardDescription className="font-medium text-lg flex justify-between">
          <div>{topic}</div>
          <div>{diff}</div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl line-clamp-1 overflow-hidden text-ellipsis">
          {puzzleName}
        </div>
      </CardContent>
      <CardFooter className="inline-flex w-full">
      <BiSolidCoin className="size-6 fill-yellow-300"/>
        {pointVal}
      </CardFooter>
    </Card>
  )
}