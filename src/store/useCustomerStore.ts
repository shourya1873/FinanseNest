import { create } from "zustand";
import { persist } from "zustand/middleware";

type Customer = {
    id: number;
    name: string;
    email: string;
    // add more fields as needed
};

type CustomerState = {
    customer: Customer | null;
    setCustomer: (data: Customer) => void;
    clearCustomer: () => void;
};

export const useCustomerStore = create<CustomerState>()(
    persist(
        (set) => ({
            customer: null,
            setCustomer: (data) => set({ customer: data }),
            clearCustomer: () => set({ customer: null }),
        }),
        {
            name: "customer-session",
            storage: {
                getItem: (name) => JSON.parse(sessionStorage?.getItem(name)),
                setItem: (name, value) => sessionStorage.setItem(name, JSON.stringify(value)),
                removeItem: (name) => sessionStorage.removeItem(name),
            },
        }
    )
);
