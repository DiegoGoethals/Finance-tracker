import { NavLink } from "react-router-dom";
import "./AccountCard.css";

function AccountCard(props) {

    const { account } = props;
    const { name, balance } = account;
    let balanceClass = "account-balance";
    if (balance < 0) {
        balanceClass += " negative";
    }

    return (
        <NavLink to={`/accounts/${props.id}`} className="account-card">
            <div className="content-wrapper">
                <p className="account-name">{name}</p>
                <p className={balanceClass}>{balance}</p>
            </div>
        </NavLink>
    );
}

export default AccountCard;