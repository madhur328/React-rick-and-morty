import Tagify from '@yaireo/tagify';
import '@yaireo/tagify/dist/tagify.css';
import './SearchBox.css'
import {useRef, useEffect, useState} from 'react';

function SearchBox(props) {
    const textInput = useRef(null);
    const [inputVal, setInputVal] = useState('')
    const buildTeam = () => {
        fetch(`https://rickandmortyapi.com/api/character/${inputVal.map(elem => elem.id).join()}`)
			.then(res => res.json())
            .then(json => props.setChars(json));
    }
    useEffect(() => {
            let inputBox = new Tagify(textInput.current, {
                whitelist:[],
                dropdown : {
                    classname     : "color-blue",
                    enabled       : 0,              // show the dropdown immediately on focus
                    maxItems      : 6,
                    position      : "text",         // place the dropdown near the typed text
                    closeOnSelect : false,          // keep the dropdown open after selecting a suggestion
                    highlightFirst: true
                },
                enforceWhitelist: true,
                maxTags: 6, 
                editTags: false,
            });
            let controller;
            inputBox.on('input', onInput);
            function onInput( e ){
                var value = e.detail.value
                setInputVal(inputBox.value);
                if(value === '') return
                inputBox.whitelist = null // reset the whitelist
    
                // https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
                controller && controller.abort()
                controller = new AbortController()
    
                // show loading animation and hide the suggestions dropdown
                inputBox.loading(true).dropdown.hide()
    
                fetch('https://rickandmortyapi.com/api/character/?name=' + value, {signal:controller.signal})
                    .then(res => res.json())
                    .then(json => {
                        if(!json.results) return
                        inputBox.whitelist = json.results.map(elem => {
                            return {id: elem.id, value: elem.name}
                        })
                        inputBox.loading(false).dropdown.show(value) // render the suggestions dropdown
                    })
                    .catch(() => {})
                    .finally(() => {
                        inputBox.loading(false)
                    })
            }    
    }, [] );

    return(
        <div className="sb_container">
            <input ref={textInput} className="sb_input" type="text"/>
            <button className="sb_button" onClick={buildTeam}>Build Team</button>
        </div>
    );
}

export default SearchBox;