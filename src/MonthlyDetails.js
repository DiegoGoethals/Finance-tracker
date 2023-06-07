import './MonthlyDetails.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailTable from './DetailTable';
import CategoryTable from './CategoryTable';
import MonthTotal from './MonthTotal';
import localforage from 'localforage';

function MonthlyDetails() {

    const { id, month } = useParams();

    const [account, setAccount] = useState(null);

    useEffect(() => {
        localforage.getItem("accounts").then(accounts => {
            setAccount(accounts[id]);
        });
    }, [id]);

    return (
        <div className="monthly-details">
            {account && <><h2>Overview of income and expenses of the month {month} on the {account.name} account</h2>
            <div className='tables'>
                <DetailTable account={account} month={month} type='income'/>
                <DetailTable account={account} month={month} type='expenses'/>
                <MonthTotal account={account} month={month}/>
                <CategoryTable account={account} month={month} type='income'/>
                <CategoryTable account={account} month={month} type='expenses'/>
            </div></>}
        </div>
    );
}

export default MonthlyDetails;