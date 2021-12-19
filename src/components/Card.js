import './Card.css';
import {useState, useEffect} from 'react';
import {Modal} from './Modal.js'
import CharInfoModal from './CharInfoModal';
import { getEpisode } from "../helper_functions/getEpisode.js";

function Card(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [episode, setEpisode] = useState("")
    useEffect(()=> {
        if (Object.keys(props.cache).length !==0 )  getEpisode(props.cache, props.char).then(episode => setEpisode(episode))
    }, [props.cache, props.char])

    return(
        <>
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <CharInfoModal char={props.char}/>
                </Modal>
            )}
            <div className="card">
                <img className="card-img" src={props.char.image} alt="Character" />
                <div className="char-info-container">
                    <div className="name-status-container">
                    <h2
                        onClick={() => setIsModalOpen(true)}
                        className={props.char.name.length > 26 ? "char-name multiline" : "char-name"}
                    >
                        {props.char.name}
                    </h2>
                    <span>
                        <div
                        className={ (props.char.status === "Alive") ? 'status-icon alive' : (props.char.status === "Dead") ? 'status-icon dead' : 'status-icon unknown'}
                        />
                        {props.char.status} - {props.char.species}
                    </span>
                    </div>
                    <div className="location-container">
                    <span className="location text">Last known location:</span>
                    <span className="location value">{props.char.location.name}</span>
                    </div>
                    <div className="episode-seen-container">
                    <span className="episode-seen text">First seen in:</span>
                    <span className="episode-seen value">
                        {episode}
                    </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;