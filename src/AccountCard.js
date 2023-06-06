import { NavLink } from "react-router-dom";
import "./AccountCard.css";

function AccountCard(props) {

    const { account, id } = props;
    const { name, balance } = account;
    let balanceClass = "account-balance";
    if (balance < 0) {
        balanceClass += " negative";
    }

    const deleteAccount = (e) => {
        e.stopPropagation();
        e.preventDefault();
        fetch(`http://localhost:8000/accounts/${id}`, {
            method: "DELETE",
            }).then(() => {
                window.location.reload();
            });
    }

    return (
        <NavLink to={`/accounts/${id}`} className="account-card">
            <i className="fa-regular fa-circle-xmark" onClick={deleteAccount}></i>
            <div className="content-wrapper">
                <p className="account-name">{name}</p>
                <p className={balanceClass}>{balance}</p>
            </div>
        </NavLink>
    );
}

export default AccountCard;