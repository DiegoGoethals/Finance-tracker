import "./AccountDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountTable from "./AccountTable";

function AccountDetails() {
    const { id } = useParams();

    const [account, setAccount] = useState(null);
    const [months, setMonths] = useState([]); 

    let balanceClass = "account-balance";
    if (account && account.balance < 0) {
        balanceClass += " negative";
    }

    useEffect(() => {
        fetch(`http://localhost:8000/accounts/${id}`)
            .then(response => response.json())
            .then(data => {
                setAccount(data);
                setMonths(data.months);
            });
    }, [id]);

    return (
        <div className="details">
            {account && <><h1>{account.name}</h1><h2>You currently have <span className={balanceClass}>{account.balance}</span> on this account</h2></>}
            {months && <AccountTable months={months} account={account}/>}
        </div>
    );
}

export default AccountDetails;