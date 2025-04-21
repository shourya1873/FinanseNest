export function WhySection() {
    return (
        <div className="bg-white dark:bg-transparent py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-finanse-primary font-semibold tracking-wide uppercase">Why Choose FinanseNest</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Built for everyone who wants clarity around money
                    </p>
                </div>

                <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <div className="relative">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
                                alt="Financial peace of mind"
                            />
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <div className="space-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-finanse-primary text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Simple and Intuitive</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        We've designed FinanseNest to be straightforward and easy to use, even if you're not a financial expert.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-finanse-primary text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Privacy Focused</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Your financial data is private and we keep it that way. No selling your information to third parties.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-finanse-primary text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Fast and Reliable</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Access your financial information quickly and reliably, whenever and wherever you need it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
