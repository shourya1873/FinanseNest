"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import { useTheme } from "next-themes"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartDataTemplate = (theme: string) => [
  {
    browser: "chrome",
    visitors: 275,
    fill: theme === "light" ? "#0072B2" : "#3b82f6", // same as desktop line
  },
  {
    browser: "safari",
    visitors: 200,
    fill: theme === "light" ? "#10b981" : "#34d399", // same as mobile line
  },
  {
    browser: "firefox",
    visitors: 187,
    fill: "#f59e0b", // amber-500
  },
  {
    browser: "edge",
    visitors: 173,
    fill: "#a78bfa", // violet-400
  },
  {
    browser: "other",
    visitors: 90,
    fill: "#6b7280", // gray-500
  },
]

export function CustomPieChart() {
  const { theme = "light" } = useTheme()
  const chartData = chartDataTemplate(theme)

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Custom Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={{}}
          className="mx-auto aspect-square max-h-[250px] px-0"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              labelLine={false}
              label={({ payload, ...props }) => (
                <text
                  x={props.x}
                  y={props.y}
                  textAnchor={props.textAnchor}
                  dominantBaseline={props.dominantBaseline}
                  fill={theme === "light" ? "#111827" : "#f9fafb"} // dark/light text
                  className="text-[10px] font-semibold"
                >
                  {payload.visitors}
                </text>
              )}
              nameKey="browser"
              cx="50%"
              cy="50%"
              outerRadius="90%"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}