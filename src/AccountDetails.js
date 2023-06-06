import "./AccountDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountTable from "./AccountTable";

function AccountDetails() {
    const { id } = useParams();

    const [account, setAccount] = useState(null);
    const [months, setMonths] = useState([]); 
    const [categories, setCategories] = useState([]);

    let balanceClass = "account-balance";
    if (account && account.balance < 0) {
        balanceClass += " negative";
    }

    useEffect(() => {
        fetch(`http://localhost:8000/accounts/${id}`)
            .then(response => response.json())
            .then(data => {
                setAccount(data);
                setMonths(data.months);
            });
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:8000/categories`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            });
    }, []);

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
        fetch(`http://localhost:8000/accounts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedAccount)
        }).then(response => response.json()).then(data => {
            setAccount(data);
            setMonths(data.months);
        }
        );
    }

    return (
        <div className="details">
            {account && <><h1>{account.name}</h1><h2>You currently have <span className={balanceClass}>{account.balance}</span> on this account</h2></>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" min="0" required/>
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    {categories && categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
                </select>
                <input type="radio" id="expense" name="type" value="expense" defaultChecked/>
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="income"/>
                <label htmlFor="income">Income</label>
                <button type="submit">Add</button>
            </form>
            {months && <AccountTable months={months} account={account}/>}
        </div>
    );
}

export default AccountDetails;