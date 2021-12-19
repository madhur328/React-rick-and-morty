import './CharInfoModal.css'

function CharInfoModal (props) {
    return (
        <>
            <img className="mo_card-img" src={props.char.image} alt="Character" />
            <div
            className={props.char.status === "Alive" ? "mo_char-info alive" : props.char.status === "Dead" ? "mo_char-info dead" : "mo_char-info unknown"}
            >
                <h2>{props.char.name}</h2>
                <div className="mo_info-box">
                    <div> Status: 
                        <div
                            className={props.char.status === "Alive" ? "mo_status-icon alive" : props.char.status === "Dead" ? "mo_status-icon dead" : "mo_status-icon unknown"}
                        />
                        <span>{props.char.status}</span>
                    </div>
                    <p>Species: <span>{props.char.species}</span></p>
                    <p>Gender: <span>{props.char.gender}</span></p>
                    <p>Origin Location:</p>
                    <span>{props.char.origin.name}</span>
                    <p>Last Known location:</p>
                    <span>{props.char.location.name}</span>
                </div>
            </div>
        </>
    );
}

export default CharInfoModal;