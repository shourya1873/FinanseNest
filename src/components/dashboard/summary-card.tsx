import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SummaryCardProps {
    title: string;
    value: string;
    description?: string;
    icon: LucideIcon;
    trend?: 'up' | 'down';
    trendValue?: string;
    color: string;
}

export function SummaryCard({
                                title,
                                value,
                                description,
                                icon: Icon,
                                trend,
                                trendValue,
                                color
                            }: SummaryCardProps) {
    return (
        <Card className="shadow-sm border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className={`h-4 w-4 ${color}`} />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">{description}</p>
                {trend && (
                    <div className={`flex items-center mt-1 text-xs ${trend === 'up' ? 'text-finanse-success' : 'text-red-500'}`}>
                        {trend === 'up' ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3 mr-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 7a.75.75 0 01-.75.75H6.612l3.158 3.158a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 111.06 1.06L6.612 6.25h4.638A.75.75 0 0112 7z"
                                    clipRule="evenodd"
                                    transform="rotate(-90 10 10)"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3 mr-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 7a.75.75 0 01-.75.75H6.612l3.158 3.158a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 111.06 1.06L6.612 6.25h4.638A.75.75 0 0112 7z"
                                    clipRule="evenodd"
                                    transform="rotate(90 10 10)"
                                />
                            </svg>
                        )}
                        <span>{trendValue} from last month</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
