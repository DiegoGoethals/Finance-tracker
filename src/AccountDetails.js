import "./AccountDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountTable from "./AccountTable";
import TransActionForm from "./TransactionForm";
import localforage from "localforage";

function AccountDetails() {
    const { id } = useParams();

    const [account, setAccount] = useState(null);
    const [months, setMonths] = useState([]);

    let balanceClass = "account-balance";
    if (account && account.balance < 0) {
        balanceClass += " negative";
    }

    useEffect(() => {
        localforage.getItem("accounts").then(accounts => {
            const account = accounts[id];
            const updatedAccount = {...account};
            Object.keys(updatedAccount.months).forEach(month => {
                updatedAccount.months[month].income = updatedAccount.months[month].income.filter(income => {
                    return parseInt(income.date.split('-')[0]) === new Date().getFullYear();
                });
            });
            Object.keys(updatedAccount.months).forEach(month => {
                updatedAccount.months[month].expenses = updatedAccount.months[month].expenses.filter(expense => {
                    return parseInt(expense.date.split('-')[0]) === new Date().getFullYear();
                });
            });
            accounts[id] = updatedAccount;
            setAccount(updatedAccount);
            setMonths(updatedAccount.months);
            localforage.setItem("accounts", accounts);
        });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const amount = parseInt(event.target.amount.value);
        const category = event.target.category.value;
        const type = event.target.type.value;
        const date = new Date().toISOString().split('T')[0];
        const newTransaction = {category, amount, date};
        const month = new Date().toLocaleString('en-us', { month: "long" }).toLowerCase();
        const updatedAccount = {...account};
        if (type === "expense") {
            updatedAccount.balance -= amount;
            updatedAccount.months[month].expenses.push(newTransaction);
        } else {
            updatedAccount.balance += amount;
            updatedAccount.months[month].income.push(newTransaction);
        }
        setAccount(updatedAccount);
        setMonths(updatedAccount.months);
        localforage.getItem("accounts").then(accounts => {
            accounts[id] = updatedAccount;
            localforage.setItem("accounts", accounts);
        })
        /*
        fetch(`http://localhost:8000/accounts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedAccount)
        }).then(response => response.json()).then(data => {
            setAccount(data);
            setMonths(data.months);
        });
        */
    }

    return (
        <div className="details">
            {account && <><h1>{account.name}</h1><h2>You currently have <span className={balanceClass}>{account.balance}</span> on this account</h2></>}
            {account && <TransActionForm handleSubmit={handleSubmit}/>}
            {months && <AccountTable months={months} account={account}/>}
        </div>
    );
}

export default AccountDetails;