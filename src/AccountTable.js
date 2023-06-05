import './AccountTable.css';

function AccountTable(props) {

    const {months, account} = props;
    document.querySelectorAll('td').forEach(td => {
        if (td.innerText.includes('-')) {
            td.classList.add('negative');
        }
    });
    
    const clickRowHandler = (event) => {
        const month = event.target.parentElement.id;
        const accountId = account.id;
        window.location.href = `http://localhost:3000/accounts/${accountId}/${month}`;
    }

    return (
        <table>
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
                        <tr key={month} id={month} onClick={clickRowHandler}>
                            <td>{month}</td>
                            <td>
                                €{months[month].income.reduce(
                                (accumulator, income) => accumulator + income.amount,
                                    0
                                    )}
                            </td>
                            <td>
                                €{months[month].expenses.reduce(
                                (accumulator, expense) => accumulator + expense.amount,
                                0
                                )}
                            </td>
                            <td>
                                €{months[month].income.reduce(
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
            </table>
    )
}

export default AccountTable;