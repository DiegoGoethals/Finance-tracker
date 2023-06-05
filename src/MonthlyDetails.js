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
            <table className="income">
                <caption>Income</caption>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Source</th>
                    </tr>
                </thead>
                <tbody>
                    {account && account.months[month].income.map((income) => (
                        <tr key={income.id}>
                            <td>€{income.amount}</td>
                            <td>{income.source}</td>
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
                    </tr>
                </thead>
                <tbody>
                    {account && account.months[month].expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>€{expense.amount}</td>
                            <td>{expense.target}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MonthlyDetails;