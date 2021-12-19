import './CardContainer.css'
import Card from './Card.js'
import { cacheEpisodes } from "../helper_functions/cacheEpisodes";
import {useState, useEffect} from 'react'

function CardContainer(props) {
    const [cache, setCache] = useState({});
    useEffect(() => {
        if(props.chars) setCache(oldCache => cacheEpisodes(props.chars, oldCache))
    }, [props.chars])

    return (
        <div className="card-container">
            {props.chars ? Array.isArray(props.chars) ? props.chars.map((char, i) => <Card showModal={props.showModal} cache={cache} char={char} key={i}/>) : <Card showModal={props.showModal} cache={cache} char={props.chars}/> : ""}
        </div>
    );
}

export default CardContainer;