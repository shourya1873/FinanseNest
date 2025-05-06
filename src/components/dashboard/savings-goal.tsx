import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PiggyBank } from "lucide-react";

interface SavingsGoalProps {
    title: string;
    current: number;
    target: number;
    deadline?: string;
}

export function SavingsGoal({ title, current, target, deadline }: SavingsGoalProps) {
    const percentage = Math.min(Math.round((current / target) * 100), 100);

    return (
        <Card className="shadow-sm border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings Goal: {title}</CardTitle>
                <PiggyBank className="h-4 w-4 text-finanse-secondary" />
            </CardHeader>
            <CardContent>
                <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">${current.toLocaleString()} of ${target.toLocaleString()}</span>
                    <span className="text-sm font-medium">{percentage}%</span>
                </div>
                <Progress value={percentage} className="h-2" />
                {deadline && (
                    <p className="text-xs text-muted-foreground mt-2">Target date: {deadline}</p>
                )}
            </CardContent>
        </Card>
    );
}
