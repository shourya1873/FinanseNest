import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";

interface TipsProps {
    tips: Array<{
        title: string;
        content: string;
    }>;
}

export function TipsSection({ tips }: TipsProps) {
    return (
        <Card className="shadow-sm border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tips & Insights</CardTitle>
                <InfoIcon className="h-4 w-4 text-finanse-primary" />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {tips.map((tip, index) => (
                        <div key={index} className="bg-slate-50 p-3 rounded-md">
                            <h3 className="text-sm font-medium">{tip.title}</h3>
                            <p className="text-xs text-muted-foreground mt-1">{tip.content}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
