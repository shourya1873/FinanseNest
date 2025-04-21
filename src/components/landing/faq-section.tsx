'use client'
import {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";

export function FaqSection() {
    const faqs = [
        {
            question: "Is my data secure?",
            answer:
                "Yes, we take security very seriously. All your financial data is encrypted both in transit and at rest. We use bank-level security measures to ensure your information is protected at all times."
        },
        {
            question: "How do I create a budget?",
            answer:
                "Creating a budget in FinanseNest is simple. Just navigate to the Budgets section in your dashboard, click 'Create New Budget', and follow the step-by-step guide. You can set up different categories and allocate amounts based on your income."
        },
        {
            question: "Is it really free?",
            answer:
                "Yes, FinanseNest offers all essential features like budgeting, expense tracking, and savings goals completely free. Only advanced AI-powered insights are part of the paid Premium plan."
        },
        {
            question: "Can I import data from my bank?",
            answer:
                "Currently, FinanseNest does not support real-time bank syncing. All data needs to be entered manually through the web app. We may support import features in future updates."
        },
        {
            question: "What devices can I use FinanseNest on?",
            answer:
                "FinanseNest is a web-based application that works on any device with a modern web browser. This includes desktops, laptops, tablets, and smartphones, so you can manage your finances from anywhere."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer:
                "Absolutely. You can downgrade from Premium to Free at any time. Your subscription will continue until the end of your current billing period, and you won't be charged again after that."
        }
    ];


    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq" className="bg-white dark:bg-transparent py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-finanse-primary tracking-wide uppercase">FAQ</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Frequently asked questions
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Get answers to the most common questions about FinanseNest.
                    </p>
                </div>
                <div className="mt-12 max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="text-left w-full flex justify-between items-start text-gray-400"
                            >
                                <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                                <span className="ml-6 h-7 flex items-center">
                  {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-finanse-primary"/>
                  ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400"/>
                  )}
                </span>
                            </button>
                            {openIndex === index && (
                                <div className="mt-2 pr-12">
                                    <p className="text-base text-gray-500">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
