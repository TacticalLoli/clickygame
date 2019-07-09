import React from 'react';
import './App.css';
import AnimeCards from "./components/animecard/card";
import Wrapper from "./components/wrapper/wrapper";
import Title from "./components/title/title";
import cardmatches from "./cards.json";

let correctGuesses = 0;
let topScore = 0;
clickmessage = "Weeb Gage"


class App extends Component {
  state = {
    cardmatches,
    correctGuesses,
    topScore
  };

  setClick = id => {
    const cardmatches = this.state.cardmatches;

    const clickedCardMatches = cardmatches.filter(cardmatches => cardmatches.id === id);

    if (clickedCardMatches[0].clicked){
      
      correctGuesses = 0;
      clickmessage = "oof"

      for (let i = 0; i < cardmatches.length; i++){
        cardmatches[i].clicked = false;
      }

      this.setState({clickmessage});
      this.setState({correctGuesses});
      this.setState({cardmatches});
    } else if (correctGuesses < 11) {
      clickedCardMatches[0].clicked = true;

      correctGuesses++;
    }
  }
}

function App() {
  return (
    
  );
}

export default App;
