import AccountCard from './AccountCard';
import AddCard from './AddCard';
import './Home.css';
import { useEffect, useState } from 'react';

function Home() {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/accounts')
            .then(response => response.json())
            .then(data => {
                setAccounts(data);
            });
    }, []);

    return (
        <div className="home">
            <h2>Accounts</h2>
            <ul id='accounts'>
                {accounts.map((account) => (
                    <li key={account.id}>
                        <AccountCard account={account} id={account.id}/>
                    </li>
                ))}
            <AddCard/>
            </ul>
        </div>
    );
}

export default Home;