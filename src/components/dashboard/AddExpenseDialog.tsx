'use client';

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign } from "lucide-react";
import { useState } from "react";

export function AddExpenseDialog() {
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");

    const handleAdd = () => {
        // Submission logic here, e.g. show a toast
        setAmount("");
        setDesc("");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full bg-finanse-accent hover:bg-finanse-accent/90">
                    <DollarSign className="mr-2 h-4 w-4" /> Add Expense
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Expense</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                    <Textarea
                        placeholder="Description (e.g. Grocery shopping)"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleAdd} className="bg-finanse-accent text-white">Add</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
