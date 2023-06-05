function MonthTotal(props) {

    const {account, month} = props;
    document.querySelectorAll('.total td').forEach(td => {
        if (td.innerText.includes('-')) {
            td.classList.add('negative');
        }
    });

    return (
        <table className='total'>
            <caption>Total</caption>
            <thead>
                <tr>
                    <th>Income</th>
                    <th>Expenses</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>€{account.months[month].income.reduce((accumulator, income) => 
                    accumulator + income.amount, 0)}</td>
                    <td>€{account.months[month].expenses.reduce((accumulator, expense) => 
                    accumulator + expense.amount, 0)}</td>
                    <td>€{account.months[month].income.reduce((accumulator, income) => 
                    accumulator + income.amount, 0) - account.months[month].expenses.reduce((accumulator, expense) => 
                    accumulator + expense.amount, 0)}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default MonthTotal;