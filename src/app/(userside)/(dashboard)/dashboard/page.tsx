'use client'
import {SummaryCard}  from "@/components/dashboard/summary-card";
import {SavingsGoal} from "@/components/dashboard/savings-goal";
import {ExpenseChart} from "@/components/dashboard/expense-chart";
import ActionCards from "@/components/dashboard/action-cards";
import {TipsSection} from "@/components/dashboard/tips-section";
import {BudgetAlert} from "@/components/dashboard/budget-alert";
import { Wallet, PiggyBank, DollarSign } from "lucide-react";
import {useCustomerStore} from "@/store/useCustomerStore";

const Page = () => {

    const {customer} = useCustomerStore();

    const expenseData = [
        { name: "Food", value: 450, color: "#0077FF" },
        { name: "Housing", value: 1200, color: "#875CFF" },
        { name: "Entertainment", value: 200, color: "#FF7A00" },
        { name: "Transportation", value: 350, color: "#28C76F" },
    ];

    // Sample tips data
    const tips = [
        {
            title: "Dining expenses are higher than usual",
            content: "You've spent 30% more on restaurants compared to last month. Consider cooking at home more often."
        },
        {
            title: "Subscription alert",
            content: "You have 5 active subscriptions totaling $48.99/month. Review them to identify any you don't use."
        }
    ];
    
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back, {customer?.name}!</h1>
                    <p className="text-gray-600">Here&#39;s an overview of your finances</p>
                </div>

                {/* Top summary cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <SummaryCard
                        title="Total Income"
                        value="$4,250.00"
                        description="Current month"
                        icon={DollarSign}
                        trend="up"
                        trendValue="8.2%"
                        color="text-finanse-success"
                    />
                    <SummaryCard
                        title="Total Expenses"
                        value="$2,150.00"
                        description="Current month"
                        icon={Wallet}
                        trend="down"
                        trendValue="3.1%"
                        color="text-finanse-accent"
                    />
                    <SummaryCard
                        title="Remaining Balance"
                        value="$2,100.00"
                        description="Available to spend or save"
                        icon={PiggyBank}
                        color="text-finanse-primary"
                    />
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Budget alert (conditional) */}
                        <BudgetAlert
                            category="Food"
                            budgeted={400}
                            actual={450}
                            remainingDays={12}
                        />

                        {/* Expenses Breakdown Chart */}
                        <ExpenseChart data={expenseData} />

                        {/* Action Cards */}
                        <ActionCards />
                    </div>

                    <div className="space-y-6">
                        {/* Savings Goal Tracker */}
                        <SavingsGoal
                            title="Vacation Fund"
                            current={1500}
                            target={2000}
                            deadline="August 31, 2025"
                        />

                        {/* Tips & Suggestions */}
                        <TipsSection tips={tips} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;