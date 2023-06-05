import { useState } from 'react';

function AddAccountForm() {

    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0);
    const months = {
        january: {
            income: [],
            expenses: []
        },
        february: {
            income: [],
            expenses: []
        },
        march: {
            income: [],
            expenses: []
        },
        april: {
            income: [],
            expenses: []
        },
        may: {
            income: [],
            expenses: []
        },
        june: {
            income: [],
            expenses: []
        },
        july: {
            income: [],
            expenses: []
        },
        august: {
            income: [],
            expenses: []
        },
        september: {
            income: [],
            expenses: []
        },
        october: {
            income: [],
            expenses: []
        },
        november: {
            income: [],
            expenses: []
        },
        december: {
            income: [],
            expenses: []
        }
    };

    const addAccount = (e) => {
        e.preventDefault();
        const newAccount = { name, balance, months };
        fetch('http://localhost:8000/accounts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAccount)
        })
            .then(response => response.json())
            .then(_ => {
                document.querySelector('dialog').close();
                window.location.reload();
            });
    }

    return (
        <dialog>
            <form onSubmit={addAccount}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} required onChange={(e) => {setName(e.target.value)}}/>
                <label htmlFor="balance">Starting balance:</label>
                <input type="number" id="balance" name="balance" min="0" value={balance} required onChange={(e) => setBalance(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </dialog>
    );
}

export default AddAccountForm;