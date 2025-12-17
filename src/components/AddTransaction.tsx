import { useState } from "react";
import type {Transaction} from "../types/transaction";
import type {TransactionType} from "../types/transaction";


interface Props {
    onAdd: (transaction: Transaction) => void;
}

function AddTransaction({onAdd}: Props){
    const [title, setTitle] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [type, setType] = useState<TransactionType>("expense");

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        
        if(!title || amount === 0) return;

        const newTransaction: Transaction = {
            id: Date.now(),
            title,
            amount: type === "expense" ? -Math.abs(amount) : Math.abs(amount),
            type,
        };

        onAdd(newTransaction);

        setTitle("");
        setAmount(0);
    } 

    return (
        <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow p-4 mb-6"
        >
            <h3 className="text-xl font-semibold mb-4">Add Transaction</h3>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <select
                value={type}
                onChange={(e) => setType(e.target.value as TransactionType)}
                className="w-full border rounded p-2 mb-4"
            >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            <button 
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >Add Transaction</button>
        </form>
    );
}

export default AddTransaction;