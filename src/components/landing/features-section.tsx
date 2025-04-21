import {
    BarChart3,
    Wallet,
    PiggyBank,
    Bell,
    LineChart,
    Calendar
} from "lucide-react";

export function FeaturesSection() {
    const features = [
        {
            name: "Track Expenses & Income",
            description: "Keep track of where your money comes from and where it goes with intuitive categories and tags.",
            icon: Wallet,
            color: "bg-finanse-primary/10 text-finanse-primary",
        },
        {
            name: "Set Budgets",
            description: "Create custom budgets for different spending categories and track your progress in real-time.",
            icon: BarChart3,
            color: "bg-finanse-secondary/10 text-finanse-secondary",
        },
        {
            name: "Create Savings Goals",
            description: "Set financial goals and track your progress with visual indicators that keep you motivated.",
            icon: PiggyBank,
            color: "bg-finanse-accent/10 text-finanse-accent",
        },
        {
            name: "Get Smart Tips & Alerts",
            description: "Receive personalized insights and timely notifications about your spending patterns.",
            icon: Bell,
            color: "bg-finanse-success/10 text-finanse-success",
        },
        {
            name: "Visual Reports & Insights",
            description: "View beautiful charts and graphs that help you understand your financial habits at a glance.",
            icon: LineChart,
            color: "bg-purple-100 text-purple-600",
        },
        {
            name: "Budget Planning",
            description: "Plan ahead with monthly, quarterly, and yearly budgeting tools that adapt to your needs.",
            icon: Calendar,
            color: "bg-blue-100 text-blue-600",
        },
    ];

    return (
        <div id="features" className="py-24 bg-gray-50 dark:bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-finanse-primary font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Take control of your financial life
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Everything you need to manage your personal finances, all in one place.
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center">
                                    <div className={`flex-shrink-0 rounded-md p-3 ${feature.color}`}>
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="ml-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                                </div>
                                <p className="mt-4 text-base text-gray-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
