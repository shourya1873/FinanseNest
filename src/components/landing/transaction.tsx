import { Button } from "@/components/ui/button";
import {
  Download,
  Filter,
  ArrowUpDown,
  Calendar,
  Search,
  DollarSign,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { CustomSelect } from "../common/select";
import { CustomTable } from "../common/table";
import { CustomPagination } from "../common/pagination";
import { Card, CardContent } from "@/components/ui/card";

const Transaction = () => {
  return (
    <div className="w-full h-full px-4 md:px-10 py-10 flex flex-col gap-10">
      {/* First Division */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6">
        <div className="w-full md:w-[50%]">
          <h1 className="text-2xl font-bold">Transactions</h1>
          <p className="text-lg">View and manage your financial transactions.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-end items-stretch md:items-end gap-4 w-full md:w-[50%]">
        <Button className="bg-gray-200 text-black-accent border border-finanse-accent hover:bg-gray-100 w-full md:w-[30%] dark:text-black cursor-pointer">
            <DollarSign className="h-4 w-4" /> Add Expense
          </Button>
          <Button className="bg-gray-200 text-black-accent border border-finanse-accent hover:bg-gray-100 w-full md:w-[30%] dark:text-black cursor-pointer">
            <DollarSign className="h-4 w-4" /> Add Income
          </Button>
          <Button className="bg-gray-200 text-black-accent border border-finanse-accent hover:bg-gray-100 w-full md:w-[30%] dark:text-black cursor-pointer">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      {/* Second Division */}
      <Card className="flex flex-col md:flex-row justify-start items-center gap-4 p-4">
        <CardContent className="w-full md:w-[50%]">
          <div className="relative w-full">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <Input
              type="search"
              placeholder="Search transactions..."
              className="w-full pl-10"
            />
          </div>
        </CardContent>

        <CardContent className="w-full md:w-[45%] flex flex-col sm:flex-row justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-1 w-full sm:flex-1">
            <Filter size={16} className="text-gray-500" />
            <CustomSelect />
          </div>
          <div className="flex justify-center items-center gap-1 w-full sm:flex-1">
            <ArrowUpDown size={16} className="text-gray-500" />
            <CustomSelect />
          </div>
          <div className="flex justify-center items-center gap-1 w-full sm:flex-1">
            <Calendar size={16} className="text-gray-500" />
            <CustomSelect />
          </div>
        </CardContent>
      </Card>

      {/* Third Division */}
      <Card className="w-full h-full p-5">
        <CustomTable />
      </Card>

      {/* Fourth Division */}
      <div>
        <CustomPagination />
      </div>
    </div>
  );
};

export default Transaction;