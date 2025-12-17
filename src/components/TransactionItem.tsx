import { useState } from "react";
import type { Transaction, TransactionType } from "../types/transaction";

interface Props {
  transaction: Transaction;
  onDelete: (id: number) => void;
  onEdit: (transaction: Transaction) => void;
}

function TransactionItem({ transaction, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(transaction.title);
  const [amount, setAmount] = useState(Math.abs(transaction.amount));
  const [type, setType] = useState<TransactionType>(transaction.type);

  function handleSave(){
    const updated: Transaction ={
      ...transaction,
      title,
      amount: type === "expense" ? -Math.abs(amount) : Math.abs(amount),
      type,
    };

    onEdit(updated);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className="border rounded p-3 mb-2 bg-gray-50">
        <input className="w-full border p-1 mb-2 rounded"
        value={title}
        onChange={e=>setTitle(e.target.value)}/>

        <input className="w-full border p-1 mb-2 rounded" type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />

        <select className="w-full border p-1 mb-2 rounded" value={type} onChange={e => setType(e.target.value as TransactionType)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={() => setIsEditing(false)} className="px-3 py-1 text-sm border rounded">Cancel</button>

          <button onClick={handleSave} className="px-3 py-1 text-sm bg-indigo-600 text-white rounded">Save</button>
        </div>
      </div>
    );
  }

  const isIncome = transaction.type === "income";

  return (
    <div className="flex justify-between items-center py-2 border-b last:border-b-0">
      <span className="text-gray-700">
        {transaction.title}
      </span>

      <span
        className={`font-semibold ${
          isIncome ? "text-green-600" : "text-red-500"
        }`}
      >
        {isIncome ? "+" : "-"}${Math.abs(transaction.amount)}
      </span>

      <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:underline text-sm mr-2">
        Edit
      </button>

      <button onClick={() => onDelete(transaction.id)} className="text-red-500 hover:underline text-sm">
        Delete
      </button>
    </div>
  );
}

export default TransactionItem;
