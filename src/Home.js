import localforage from 'localforage';
import AccountCard from './AccountCard';
import AddAccountForm from './AddAccountForm';
import AddCard from './AddCard';
import './Home.css';
import { useEffect, useState } from 'react';

function Home() {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        localforage.getItem('accounts').then(accounts => {
            setAccounts(accounts);
        });
    }, []);

    return (
        <div className="home">
            <h2>Accounts</h2>
            <AddAccountForm/>
            <ul id='accounts'>
                {accounts && accounts.map((account) => (
                    <li key={account.name}>
                        <AccountCard account={account}/>
                    </li>
                ))}
            <AddCard/>
            </ul>
        </div>
    );
}

export default Home;