'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface ExpenseData {
    name: string;
    value: number;
    color: string;
}

interface ExpenseChartProps {
    data: ExpenseData[];
}

export function ExpenseChart({ data }: ExpenseChartProps) {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    const formatCurrency = (value: number) => {
        return `$${value.toLocaleString()}`;
    };

    function CustomTooltip({ active, payload }: any) {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            const percentage = ((data.value / total) * 100).toFixed(1);

            return (
                <div className="custom-tooltip bg-white p-3 rounded-md shadow-md border">
                    <p className="font-medium">{data.name}</p>
                    <p className="text-sm">
                        {formatCurrency(data.value)}{" "}
                        <span className="text-gray-500">({percentage}%)</span>
                    </p>
                </div>
            );
        }

        return null;
    }


    return (
        <Card className="shadow-sm border">
            <CardHeader>
                <CardTitle className="text-sm font-medium">Expenses Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[230px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                innerRadius={50}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            <Legend
                                layout="horizontal"
                                verticalAlign="bottom"
                                align="center"
                                formatter={(value, entry: any) => {
                                    return <span className="text-xs">{value}</span>;
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
