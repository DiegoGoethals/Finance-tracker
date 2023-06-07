import localforage from 'localforage';
import './AddAccountForm.css';
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
        localforage.getItem('accounts').then(accounts => {
            const id = accounts.length;
            newAccount.id = id;
            accounts.push(newAccount);
            localforage.setItem('accounts', accounts).then(_ => {
                document.querySelector('dialog').close();
                window.location.reload();
            });
        });
    }

    return (
        <dialog>
            <form onSubmit={addAccount}>
                <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input type="text" autoComplete='off' id="name" name="name" value={name} required onChange={(e) => {setName(e.target.value)}}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="balance">Starting balance:</label>
                    <input type="number" autoComplete='off' id="balance" name="balance" min="0" value={balance} required onChange={(e) => setBalance(e.target.value)}/>
                </fieldset>
                <div className='buttons'>
                    <button type="button" onClick={() => {
                        setName('');
                        setBalance(0);
                        document.querySelector('dialog').close();
                    }}>Cancel</button>
                    <button type="submit">Add</button>
                </div>
            </form>
        </dialog>
    );
}

export default AddAccountForm;