function AddCard() {

    const openDialog = () => {
        document.querySelector('dialog').showModal();
    }

    return (
        <div className="add-card" onClick={openDialog}>
            <p className="add-card-button">+</p>
        </div>
    );
}

export default AddCard;