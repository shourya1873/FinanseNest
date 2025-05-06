import React from 'react';
import { AddExpenseDialog } from "./AddExpenseDialog";
import { AddIncomeDialog } from "./AddIncomeDialog";

const ActionCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AddExpenseDialog />
            <AddIncomeDialog />
        </div>
    );
};

export default ActionCards;