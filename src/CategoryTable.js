function CategoryTable(props) {

    const {account, month, type} = props;

    let categories = account.months[month][type].map((money) => money.category);
    categories = [...new Set(categories)];
    const categoryAmounts = categories.map((category) => {
        let amount = 0;
        account.months[month][type].forEach((money) => {
            if (money.category === category) {
                amount += money.amount;
            }
        });
        return {category: category, amount: amount};
    });

    return (
        <table>
            <caption>{type} by category</caption>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            {account && categoryAmounts.map((category) => (
                    <tr key={category}>
                        <td>{category.category}</td>
                        <td>€{category.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CategoryTable;