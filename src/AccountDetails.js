import "./AccountDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AccountTable from "./AccountTable";

function AccountDetails() {
    const { id } = useParams();

    const [account, setAccount] = useState(null);
    const [months, setMonths] = useState([]); 

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
            <h1>Account Details</h1>
            {account && <><p>{account.name}</p><p>{account.balance}</p></>}
            {months && <AccountTable months={months}/>}
        </div>
    );
}

export default AccountDetails;