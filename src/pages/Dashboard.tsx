
import {useEffect, useState } from 'react';
import BalanceCard from '../components/BalanceCard';
import TransactionList from '../components/TransactionList';
import type { Transaction } from '../types/transaction';
import AddTransaction from '../components/AddTransaction';
import { transactions as initialTransactions } from '../data/transactions';
import FeedbackForm from '../components/learning';
import FullName from '../components/FullName';

const STORAGE_KEY = 'fintrack_transactions';

function Dashboard() {
    const [transactions, setTransactions] = useState<Transaction[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : initialTransactions;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    }, [transactions]);

    function handleAddTransaction(transaction: Transaction){
        setTransactions(prev => [transaction, ...prev]);
    }

    function handleDeleteTransaction(id: number){
        setTransactions(prev => prev.filter(tx => tx.id !== id));
    }

    function handleEditTransaction(updated: Transaction){
        setTransactions(prev => prev.map(tx => (tx.id === updated.id ? updated:tx)));
    }

    return (
        <div className='min-h-screen bg-gray-100 p-6'>
            <div className='max-w-xl mx-auto'>
                <h1 className='text-3xl font-bold text-center mb-6'>FinTrack Dashboard</h1>

                <BalanceCard transactions={transactions} />
                <AddTransaction onAdd={handleAddTransaction} />
                <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} onEdit={handleEditTransaction} />
                <FeedbackForm />
                <FullName />
            </div>
        </div>
    )
}

export default Dashboard;