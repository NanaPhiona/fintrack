import type { Transaction } from "../types/transaction"; 

export const transactions: Transaction[] = [
    {
        id: 1,
        title: "Grocery Shopping",
        amount: -50,
        type: "expense",
    },
    {
        id: 2,
        title: "Salary",
        amount: 2000,
        type: "income",
    },
    {
        id: 3,
        title: "Electricity Bill",
        amount: -100,
        type: "expense",
    },
    {
        id: 4,
        title: "Rent",
        amount: -1200,
        type: "expense",
    },
    {
        id: 5,
        title: "Freelance Project",
        amount: 1500,
        type: "income",
    },
    {
        id: 6,
        title: "Dining Out",
        amount: -75,
        type: "expense",
    },
    {
        id: 7,
        title: "Gym Membership",
        amount: -40,
        type: "expense",
    }
];