import { ChartBarIcon,PuzzlePieceIcon,SparklesIcon,ShieldExclamationIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function CompBar() {
    return (
        <div className="w-full h-fit flex flex-row justify-center place-content-center p-4 ">
            <div className="bg-accent p-1 rounded-2xl  backdrop-blur-3xl bg-opacity-35">
                <div className="inline-flex gap-2">
                    <ChartBarIcon className="size-8 p-2 bg-background rounded-lg"/>
                    <PuzzlePieceIcon className="size-8"/>
                    <SparklesIcon className="size-8"/>
                    <ShieldExclamationIcon className="size-8"/>
                </div>
            </div>
        </div>
    );
}