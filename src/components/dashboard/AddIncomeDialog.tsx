'use client';

import {
    Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, DollarSign, PlusCircle } from "lucide-react";
import dayjs from "dayjs";
import { useState } from "react";
import {trpc} from "@/server/client";
import toast from "react-hot-toast";

export function AddIncomeDialog() {
    const [amount, setAmount] = useState(0);
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [customCategory, setCustomCategory] = useState("");
    const [categories, setCategories] = useState(["Salary", "Bonus", "Gift"]);
    const [date, setDate] = useState<Date | undefined>();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const transaction = trpc.transaction.create.useMutation()

    const handleAdd = async () => {
        const data = {
            amount: parseFloat(amount),
            description: desc,
            categoryId: 1,
            date: date ? new Date(date).toISOString() : undefined,
            type: "INCOME"
        };

        try {
            const result = await transaction.mutateAsync(data);
            if(result?.success === true) {
                toast.success("Income added successfully.");
            } else {
                toast.error("Something went wrong");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }


        setAmount(0);
        setDesc("");
        setCategory("");
        setCustomCategory("");
        setDate(undefined);
    };

    const handleCreateNewCategory = () => {
        if (customCategory.trim()) {
            setCategories((prev) => [...prev, customCategory]);
            setCategory(customCategory);
            setCustomCategory("");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)} className="w-full bg-finanse-success hover:bg-finanse-success/90 cursor-pointer">
                    <DollarSign className="mr-2 h-4 w-4" /> Add Income
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Income</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <Input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <Textarea
                        placeholder="Description (e.g. Salary, Bonus)"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />

                    {/* Category Select */}
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className={'w-full'}>
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat} value={cat} className={'cursor-pointer'}>
                                    {cat}
                                </SelectItem>
                            ))}
                            <SelectItem value="__new__" disabled className="opacity-50 cursor-default">
                                --------
                            </SelectItem>
                            <div className="p-2 border-t w-full">
                                <div className="flex gap-2 items-center">
                                    <Input
                                        placeholder="New category"
                                        value={customCategory}
                                        onChange={(e) => setCustomCategory(e.target.value)}
                                    />
                                    <Button
                                        size="sm"
                                        className="bg-finanse-success text-white"
                                        onClick={handleCreateNewCategory}
                                    >
                                        <PlusCircle className="h-4 w-4 mr-1" /> Add
                                    </Button>
                                </div>
                            </div>
                        </SelectContent>
                    </Select>

                    {/* Optional Date Picker */}
                    {/* Optional Date Picker (Inline) */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            Select a date (optional)
                        </label>
                        <input
                            type="date"
                            value={date ? date.toISOString().split("T")[0] : ""}
                            onChange={(e) => setDate(e.target.value ? new Date(e.target.value) : undefined)}
                            className="rounded-md border"
                        />
                        {/*<Calendar*/}
                        {/*    mode="single"*/}
                        {/*    selected={date}*/}
                        {/*    onSelect={setDate}*/}
                        {/*    className="rounded-md border"*/}
                        {/*/>*/}
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleAdd} disabled={loading} className="bg-finanse-success text-white">
                        Add
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
