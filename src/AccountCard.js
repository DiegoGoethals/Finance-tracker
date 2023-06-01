import "./AccountCard.css";

function AccountCard(props) {

    const { account } = props;

    return (
        <div className="account-card">
            <p>{account.name}</p>
            <p>{account.balance}</p>
        </div>
    );
}

export default AccountCard;