function AccountTable(props) {

    const months = props.months;

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
            </table>
    )
}

export default AccountTable;