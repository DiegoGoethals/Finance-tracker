import './TransactionForm.css';

function TransActionForm(props) {

    const {handleSubmit} = props;

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
                    <option>food/drinks</option>
                    <option>work</option>
                    <option>bills</option>
                    <option>entertainment</option>
                    <option>clothing</option>
                    <option>transportation</option>
                    <option>other</option>
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