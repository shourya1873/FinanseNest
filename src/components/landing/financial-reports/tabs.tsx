import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomBarChart } from "@/components/charts/bar-chart";
import { CustomLineChart } from "@/components/charts/line-chart";
import { CustomPieChart } from "@/components/charts/pie-chart";

export function CustomTab() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="expenses">Expenses</TabsTrigger>
        <TabsTrigger value="income">Income</TabsTrigger>
        <TabsTrigger value="savings">Savings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="flex w-full gap-4">
          <div className="flex-1">
            <CustomBarChart />
          </div>
          <div className="flex-1">
            <CustomPieChart />
          </div>
          <div className="flex-1">
            <CustomLineChart />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="savings">
        <CustomBarChart />
      </TabsContent>
      <TabsContent value="income">
        <CustomLineChart />
      </TabsContent>
      <TabsContent value="expenses">
        <CustomPieChart />
      </TabsContent>
    </Tabs>
  );
}
