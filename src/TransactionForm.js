function TransActionForm(props) {

    const {handleSubmit, categories} = props;

    return (
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
    );
}

export default TransActionForm;