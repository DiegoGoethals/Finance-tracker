import "./AccountDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AccountDetails() {
    const { id } = useParams();

    const [account, setAccount] = useState(null);
    const [months, setMonths] = useState([]); 

    useEffect(() => {
        fetch(`http://localhost:8000/accounts/${id}`)
            .then(response => response.json())
            .then(data => {
                setAccount(data);
                setMonths(data.months);
            });
    }, [id]);

    return (
        <div className="details">
            <h1>Account Details</h1>
            {account && <><p>{account.name}</p><p>{account.balance}</p></>}
            {months && <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Income</th>
                        <th>Expenses</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(months).map((month) => (
                        <tr key={month}>
                            <td>{month}</td>
                            <td>
                                {months[month].income.reduce(
                                (accumulator, income) => accumulator + income.amount,
                                    0
                                    )}
                            </td>
                            <td>
                                {months[month].expenses.reduce(
                                (accumulator, expense) => accumulator + expense.amount,
                                0
                                )}
                            </td>
                            <td>
                                {months[month].income.reduce(
                                (accumulator, income) => accumulator + income.amount,
                                0
                                ) -
                                months[month].expenses.reduce(
                                    (accumulator, expense) => accumulator + expense.amount,
                                    0
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    );
}

export default AccountDetails;