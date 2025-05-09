import { CustomSelect } from "@/components/common/select";
import { Card } from "@/components/ui/card";
import {
  ArrowUp,
  ArrowDown,
  DollarSign,
  BaggageClaim,
  TrendingUp,
  FileChartColumnIncreasing,
} from "lucide-react";
import { CustomTab } from "./tabs";

const mockData = [
  {
    id: 1,
    header: "Total Income",
    income: "$1,200",
    IconComponent: ArrowUp,
    description: "from last period",
    Symbol: <DollarSign />,
    critical: false,
  },
  {
    id: 11,
    header: "Total Expenses",
    income: "$1,200",
    IconComponent: ArrowUp,
    description: "from last period",
    Symbol: <BaggageClaim />,
    critical: false,
  },
  {
    id: 13,
    header: "Savings",
    income: "$1,200",
    IconComponent: ArrowUp,
    description: "from last period",
    Symbol: <TrendingUp />,
    critical: false,
  },
  {
    id: 18,
    header: "Average Monthly Spend",
    income: "$1,200",
    IconComponent: ArrowDown,
    description: "from last period",
    Symbol: <FileChartColumnIncreasing />,
    critical: true,
  },
];

const FinancialReports = () => {
  return (
    <div className="w-full h-full px-4 md:px-10 py-10 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6">
        <div className="w-full md:w-[50%]">
          <h1 className="text-2xl font-bold">Financial Reports</h1>
          <p className="text-lg text-gray-600 dark:text-white-400">
            Visualize and analyze your financial data.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <CustomSelect />
        </div>
      </div>

      <div className="flex flex-wrap gap-y-6 gap-x-4">
        {mockData.map((i) => (
          <Card
            key={i.id}
            className="flex flex-row justify-between items-center w-full md:w-[48%] xl:w-[23.5%] p-4"
          >
            <div className="flex flex-col justify-center items-start gap-2 w-[60%]">
              <span className="text-sm text-gray-500 font-semibold dark:text-white-400">
                {i.header}
              </span>
              <span className="text-xl font-extrabold dark:text-white">
                {i.income}
              </span>
              <span className="flex items-center gap-1">
                <p
                  className={`${
                    i.critical ? "text-red-500" : "text-emerald-400"
                  }`}
                >
                  <i.IconComponent size={18} />
                </p>
                <span
                  className={`text-sm ${
                    i.critical ? "text-red-500" : "text-emerald-400"
                  }`}
                >
                  {i.description}
                </span>
              </span>
            </div>
            <div className="flex justify-center items-center w-[40%]">
              <p
                className={`${
                  i.critical
                    ? "bg-red-200 text-red-500"
                    : "bg-green-100 text-green-600"
                } p-3 rounded-full text-lg`}
              >
                {i.Symbol}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div>
        <CustomTab />
      </div>
    </div>
  );
};

export default FinancialReports;
