"use client"
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from './ui/separator';

import { PuzzlePieceIcon, ShieldExclamationIcon, ServerStackIcon } from '@heroicons/react/24/outline';
import { User } from '@/api/player';

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))',
    },
} satisfies ChartConfig;

export function UserCard({ data }: { data: User }) {
    return (
        <div className="border rounded-lg flex flex-col p-5 shadow">
            <div className="flex flex-row gap-3">
                <div className="text-xl font-bold grow">{data.username}</div>
                <Separator className="border" orientation="vertical" />

                <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger>
                            <span className="flex flex-row gap-1">
                                <PuzzlePieceIcon className="size-6" /> {data.puzzleRoundPoint}
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Puzzle Round Points</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger>
                            <span className="flex flex-row gap-1">
                                <ShieldExclamationIcon className="size-6" />
                                {data.battleRoundPoint}
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Battle Round Points</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger>
                            <span className="flex flex-row gap-1">
                                <ServerStackIcon className="size-6" /> {data.scenarioPoint}
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Scenario Round Points</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <hr className="my-3" />
            <div className="flex flex-row">
                <ChartContainer className="h-32 my-auto ms-auto w-full" config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={data.pointHistory}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={true} />
                        <XAxis
                            dataKey="minute"
                            tickLine={true}
                            axisLine={false}
                            tickMargin={4}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                        <Area
                            dataKey="points"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                        />
                    </AreaChart>
                </ChartContainer>
            </div>
        </div>
    );
}
// import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

// import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
// import { Separator } from './ui/separator';

// // import { PuzzlePieceIcon, ShieldExclamationIcon, ServerStackIcon } from '@heroicons/react/24/outline';
// // import { User } from '@/api/player';

// const chartConfig = {
//     desktop: {
//         label: 'Desktop',
//         color: 'hsl(var(--chart-1))',
//     },
// } satisfies ChartConfig;

// export function UserCard({ data }: { data: User }) {
//     return (
//         <div className="border rounded-lg flex flex-col p-5 shadow">
//             <div className="flex flex-row gap-3">
//                 <div className="text-xl font-bold grow">{data.username}</div>
//                 <Separator className="border" orientation="vertical" />

//                 <TooltipProvider>
//                     <Tooltip delayDuration={100}>
//                         <TooltipTrigger>
//                             <span className="flex flex-row gap-1">
//                                 <PuzzlePieceIcon className="size-6" /> {data.puzzleRoundPoint}
//                             </span>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                             <p>Puzzle Round Points</p>
//                         </TooltipContent>
//                     </Tooltip>
//                 </TooltipProvider>

//                 <TooltipProvider>
//                     <Tooltip delayDuration={100}>
//                         <TooltipTrigger>
//                             <span className="flex flex-row gap-1">
//                                 <ShieldExclamationIcon className="size-6" />
//                                 {data.battleRoundPoint}
//                             </span>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                             <p>Battle Round Points</p>
//                         </TooltipContent>
//                     </Tooltip>
//                 </TooltipProvider>

//                 <TooltipProvider>
//                     <Tooltip delayDuration={100}>
//                         <TooltipTrigger>
//                             <span className="flex flex-row gap-1">
//                                 <ServerStackIcon className="size-6" /> {data.scenarioPoint}
//                             </span>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                             <p>Scenario Round Points</p>
//                         </TooltipContent>
//                     </Tooltip>
//                 </TooltipProvider>
//             </div>
//             <hr className="my-3" />
//             <div className="flex flex-row">
//                 <ChartContainer className="h-32 my-auto ms-auto w-full" config={chartConfig}>
//                     <AreaChart
//                         accessibilityLayer
//                         data={data.pointHistory}
//                         margin={{
//                             left: 12,
//                             right: 12,
//                         }}
//                     >
//                         <CartesianGrid vertical={true} />
//                         <XAxis
//                             dataKey="minute"
//                             tickLine={true}
//                             axisLine={false}
//                             tickMargin={4}
//                             tickFormatter={(value) => value.slice(0, 3)}
//                         />
//                         <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
//                         <Area
//                             dataKey="points"
//                             type="natural"
//                             fill="var(--color-desktop)"
//                             fillOpacity={0.4}
//                             stroke="var(--color-desktop)"
//                         />
//                     </AreaChart>
//                 </ChartContainer>
//             </div>
//         </div>
//     );
// }
