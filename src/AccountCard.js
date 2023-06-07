import { NavLink } from "react-router-dom";
import "./AccountCard.css";
import localforage from "localforage";

function AccountCard(props) {

    const { account } = props;
    const { name, balance } = account;
    let balanceClass = "account-balance";
    if (balance < 0) {
        balanceClass += " negative";
    }

    const deleteAccount = (e) => {
        e.stopPropagation();
        e.preventDefault();
        localforage.getItem("accounts").then((accounts) => {
            const newAccounts = accounts.filter((a) => a.name !== name);
            localforage.setItem("accounts", newAccounts).then(() => {
                window.location.reload();
            });
        });
    }

    return (
        <NavLink to={`/accounts/${name}`} className="account-card">
            <i className="fa-regular fa-circle-xmark" onClick={deleteAccount}></i>
            <div className="content-wrapper">
                <p className="account-name">{name}</p>
                <p className={balanceClass}>{balance}</p>
            </div>
        </NavLink>
    );
}

export default AccountCard;