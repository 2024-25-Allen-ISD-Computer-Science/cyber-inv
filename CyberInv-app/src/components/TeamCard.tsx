import { Separator } from "@/components/ui/separator";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { Hour: "12 AM", points: 100 },
  { Hour: "1 AM", points: 150 },
  { Hour: "2 AM", points: 200 },
  { Hour: "3 AM", points: 300 },
  { Hour: "4 AM", points: 450 },
  { Hour: "5 AM", points: 650 },
  { Hour: "12 AM", points: 900 },
  { Hour: "1 AM", points: 900 },
  { Hour: "2 AM", points: 1000 },
  { Hour: "3 AM", points: 1100 },
  { Hour: "4 AM", points: 1200 },
  { Hour: "5 AM", points: 1300 },
  { Hour: "12 AM", points: 1400 },
  { Hour: "1 AM", points: 1500 },
  { Hour: "2 AM", points: 1600 },
  { Hour: "3 AM", points: 1700 },
  { Hour: "4 AM", points: 1800 },
  { Hour: "5 AM", points: 1900 },

  
];

const chartConfig = {
  Team: {
    label: "Hour",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function TeamCard() {
  return (
    <div className="min-w-full max-h-fit border border-spacing-1 border-accent rounded-xl p-5 bg-background place-content-center">
      <div className="grid-col-1">
        <div className="h-5 items-center space-x-4 text-sm gap-5 inline-flex">
          <div className="">Team Name: </div>
          <Separator orientation="vertical" />
          <div className="">Rank: </div>
          <Separator orientation="vertical" />
          <div className="">Division: </div>
        </div>
        <Separator className="my-4" />
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Team Score</CardTitle>
              <CardDescription>Cumulative Score between both teammates</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="Hour" tickLine={true} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>

                  <Area dataKey="points" type="natural" fill="url(#fillDesktop)" fillOpacity={0.4} stroke="var(--color-desktop)" stackId="a" />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 font-medium leading-none">
                    Total so far
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2 leading-none text-muted-foreground"></div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
