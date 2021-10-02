
import {useState, useEffect} from 'react';
import './App.css';

const URL = 'https://thecocktaildb.com/api/json/v1/1/random.php';

function App() {
  const [strDrink, setStrDrink] = useState();
  const [strGlass, setStrGlass] = useState();
  const [strInstructions, setStrInstructions] = useState();
  const [strIngredient1, setStrIngredient1] = useState();
  const [strIngredient2, setStrIngredient2] = useState();
  const [strIngredient3, setStrIngredient3] = useState();
  const [strIngredient4, setStrIngredient4] = useState();
  const [strIngredient5, setStrIngredient5] = useState();


  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(
      (response) => {
        const drinks = response.drinks[0];
        setStrDrink(drinks.strDrink);
        setStrGlass(drinks.strGlass);
        setStrInstructions(drinks.strInstructions);
        setStrIngredient1(drinks.strIngredient1);
        setStrIngredient2(drinks.strIngredient2);
        setStrIngredient3(drinks.strIngredient3);
        setStrIngredient4(drinks.strIngredient4);
        setStrIngredient5(drinks.strIngredient5);
      }, (error) => {
        alert(error);
      }
    )
  }, [])
 

  return (
    <>
      <div style={{margin: "50px"}}>
        <h1>Cocktail of the day</h1>
        <h2>{strDrink}</h2>
        <h3>Glass</h3>
        <p>{strGlass}</p>
        <h3>Instructions</h3>
        <p>{strInstructions}</p>
        <ul>
          <li>{strIngredient1}</li>
          <li>{strIngredient2}</li>
          <li>{strIngredient3}</li>
          <li>{strIngredient4}</li>
          <li>{strIngredient5}</li>
        </ul>
      </div>
    </>
  );
}

export default App;


/* Tämä kopsattu talteen, löytyi niin hauska API:
function App() {
  const [quote, setQuote] = useState();
  const [character, setCharacter] = useState();
  

  useEffect(() => {
   const headers = {
     'Accept': 'application/json',
     'Authorization': 'API KEY HERE'
   }

   const fetchData = async () => {
     const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
       headers: headers
     })
     const quotes = await rawQuotes.json();
     const quote = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
     setQuote(quote.dialog)
     const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
     const characters = await rawCharacters.json();
     const character = characters.docs[0];
      setCharacter(character.name)
   };
   fetchData();
  }, []);

  return (
    <>
      <div style={{margin: "30px"}}>
        <h1>Lord of the Rings Quotes:</h1>
        <h3>{character}</h3>
        <p>{quote}</p>
        <button>New Quote</button>
      </div>
    </>
  );
}

export default App;*/
