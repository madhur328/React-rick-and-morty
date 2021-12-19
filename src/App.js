import './App.css'
import Header from './components/Header.js';
import { ModalProvider } from './components/Modal';
import SearchBox from './components/SearchBox.js';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer.js';
import background from './background.PNG'
import { selectRandom } from "./helper_functions/selectRandom";
import {useState, useEffect} from 'react'

function App() {
  const [ chars, setChars ] = useState();
  useEffect(()=>{
    let random_chars_string = selectRandom(1, 826, 6).join();
    fetch(`https://rickandmortyapi.com/api/character/${random_chars_string}`)
    .then((res) => res.json())
    .then(json => {
      setChars(json)
    });
  }, [])

  return (
    <ModalProvider>
      <Header/>
      <div className="title_wrapper">
      <h1 className="title">The Rick and Morty <br /> API</h1>
      <img
        className="background"
        src={background}
        alt="Ric and morty background"
      />
      </div>
      <SearchBox setChars={setChars}/>
      <CardContainer chars={chars}/>
      <Footer/>
    </ModalProvider>
  );
}

export default App;
