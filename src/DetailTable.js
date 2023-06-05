function DetailTable(props) {

    const {account, month, type} = props;

    return (
        <table className={type}>
            <caption>{type}</caption>
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {account && account.months[month][type].map((money) => (
                    <tr key={money}>
                        <td>€{money.amount}</td>
                        <td>{money.category}</td>
                        <td>{money.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DetailTable;