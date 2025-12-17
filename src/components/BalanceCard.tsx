import type { Transaction } from "../types/transaction";

interface BalanceCardProps {
    transactions: Transaction[];
}

function BalancedCard ({ transactions }: BalanceCardProps) {
    const balance = transactions.reduce((total, tx) => total + tx.amount, 0);

    return(
        <div className="bg-white rounded-xl shadow p-6 mb-6 text-center">
            <p className="text-gray-600 mb-2">
                Total Balance
            </p>
            <h2 className="text-4xl font-bold text-indigo-600">
                ${balance.toFixed(2)}
            </h2>
        </div>
    )
}

export default BalancedCard;