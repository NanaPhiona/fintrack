import type { Transaction } from "../types/transaction";
import TransactionItem from "./TransactionItem";

interface Props {
    transactions: Transaction[];
    onDelete: (id: number) => void;
    onEdit: (transaction: Transaction) => void;
}

function TransactionList({ transactions,onDelete, onEdit }: Props) {
    return (
        <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>

            {transactions.length === 0 && (
                <p className="text-gray-500 text-center">No transactions available.</p>
            )}

            {transactions.map((tx) =>(<TransactionItem key={tx.id} transaction={tx}  onDelete={onDelete} onEdit={onEdit} />                   
        ))}
        </div>
    );
}

export default TransactionList;