import './TransactionForm.css';

function TransActionForm(props) {

    const {handleSubmit, categories} = props;

    return (
        <form onSubmit={handleSubmit} className='transaction'>
            <h3>Add a transaction for today</h3>
            <fieldset>
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" min="0" required/>
            </fieldset>
            <fieldset>
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                {categories && categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
            </select>
            </fieldset>
            <fieldset className='radio'>
                <input type="radio" id="expense" name="type" value="expense" defaultChecked/>
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="income"/>
                <label htmlFor="income">Income</label>
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
}

export default TransActionForm;