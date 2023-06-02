import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AccountDetails() {
    const { id } = useParams();

    const [account, setAccount] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/accounts/${id}`)
            .then(response => response.json())
            .then(data => {
                setAccount(data);
            });
    }, [id]);

    return (
        <div>
            <h1>Account Details</h1>
            {account && <><p>{account.name}</p><p>{account.balance}</p></>}
        </div>
    );
}

export default AccountDetails;