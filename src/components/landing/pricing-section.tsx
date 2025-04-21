import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
    const tiers = [
        {
            name: "Free",
            id: "tier-free",
            href: "/dashboard",
            price: "$0",
            description: "Everything you need to manage your budget manually.",
            features: [
                "Unlimited budget categories",
                "Expense and income tracking",
                "Savings goals",
                "Monthly summary reports",
                "Manual transaction entry",
                "Access from any device"
            ],
            cta: "Start for Free",
            mostPopular: true
        },
        {
            name: "Premium",
            id: "tier-premium",
            href: "/dashboard",
            price: "$9",
            description: "Get smart AI-powered insights and recommendations.",
            features: [
                "All Free features included",
                "AI-powered spending insights",
                "Smart budget optimization suggestions",
                "Personalized savings tips",
                "Priority support"
            ],
            cta: "Upgrade to Premium",
            mostPopular: false
        }
    ];


    return (
        <div id="pricing" className="bg-gray-50 dark:bg-transparent py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-finanse-primary tracking-wide uppercase">Pricing</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Plans for every budget
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Start for free and upgrade as your needs grow.
                    </p>
                </div>

                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`rounded-lg shadow-sm divide-y divide-gray-200 ${
                                tier.mostPopular ? 'border-2 border-finanse-primary' : 'border border-gray-200'
                            }`}
                        >
                            <div className="p-6">
                                <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{tier.name}</h2>
                                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                                <p className="mt-8">
                                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{tier.price}</span>
                                    <span className="text-base font-medium text-gray-500">/month</span>
                                </p>
                                <Link href={tier.href}>
                                    <Button
                                        className={`mt-8 block w-full py-2 px-4 rounded-md shadow ${
                                            tier.mostPopular
                                                ? 'bg-finanse-primary hover:bg-finanse-primary/90 focus:ring-finanse-primary'
                                                : 'bg-white border border-gray-300 text-finanse-primary hover:bg-gray-50 focus:ring-finanse-primary'
                                        }`}
                                        variant={tier.mostPopular ? "default" : "outline"}
                                    >
                                        {tier.cta}
                                    </Button>
                                </Link>
                            </div>
                            <div className="pt-6 pb-8 px-6">
                                <h3 className="text-xs font-medium text-gray-900 dark:text-white tracking-wide uppercase">What's included</h3>
                                <ul className="mt-6 space-y-4">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex space-x-3">
                                            <Check className="flex-shrink-0 h-5 w-5 text-finanse-success" />
                                            <span className="text-sm text-gray-500">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
