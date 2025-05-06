import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface BudgetAlertProps {
    category: string;
    budgeted: number;
    actual: number;
    remainingDays: number;
}

export function BudgetAlert({ category, budgeted, actual, remainingDays }: BudgetAlertProps) {
    const overBudget = actual > budgeted;

    return (
        <Card className={`shadow-sm border ${overBudget ? 'border-red-300 bg-red-50' : 'border-amber-300 bg-amber-50'}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Budget Alert</CardTitle>
                <AlertTriangle className={`h-4 w-4 ${overBudget ? 'text-red-500' : 'text-amber-500'}`} />
            </CardHeader>
            <CardContent>
                {overBudget ? (
                    <p className="text-sm">
                        You&#39;ve exceeded your <span className="font-medium">{category}</span> budget by{" "}
                        <span className="font-medium text-red-600">${(actual - budgeted).toLocaleString()}</span>.
                    </p>
                ) : (
                    <p className="text-sm">
                        Your <span className="font-medium">{category}</span> budget is at{" "}
                        <span className="font-medium">{Math.round((actual / budgeted) * 100)}%</span> with {remainingDays} days remaining.
                    </p>
                )}
                <div className="mt-2 text-xs">
                    {overBudget
                        ? "Consider adjusting your spending or updating your budget."
                        : "Try to keep your spending within limits for the rest of the month."}
                </div>
            </CardContent>
        </Card>
    );
}
