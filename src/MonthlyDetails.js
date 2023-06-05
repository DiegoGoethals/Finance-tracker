import './MonthlyDetails.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MonthlyDetails() {

    const { id, month } = useParams();

    const [account, setAccount] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/accounts/${id}`)
            .then(response => response.json())
            .then(data => {
                setAccount(data);
            });
    }, [id]);

    return (
        <div className="monthly-details">
            <h2>Overview of income and expenses of the month {month} on the {account.name} account</h2>
            <div className='tables'>
                <table className="income">
                    <caption>Income</caption>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Source</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {account && account.months[month].income.map((income) => (
                            <tr key={income}>
                                <td>€{income.amount}</td>
                                <td>{income.source}</td>
                                <td>{income.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table className="expenses">
                    <caption>Expenses</caption>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>target</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {account && account.months[month].expenses.map((expense) => (
                            <tr key={expense}>
                                <td>€{expense.amount}</td>
                                <td>{expense.target}</td>
                                <td>{expense.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MonthlyDetails;