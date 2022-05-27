import './App.css';
import { useState } from 'react'

function App() {

  const [acronym, updateAcronym] = useState(null)
  const [definition, updateDefinition] = useState(null)

  const dictionary = new Map();
  dictionary.set('ROFL', 'Rolling on the Floor Laughing');

  function handleChange(event) {
    let searchValue = event.target.value
    if(dictionary.has(searchValue)){
      updateAcronym(searchValue)
      updateDefinition(dictionary.get(searchValue))
    }
    else
      updateDefinition('')
  }
  

  return (
    <div className="container">
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
      </>
      <form>
        <fieldset>
          <legend>What acrynym are you looking for?</legend>
          <div className="inner-form">
            <div className="input-field">
              <button className="btn-search" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </button>
              <input id="search" type="text" placeholder="Enter Acronym" onChange={handleChange} />
            </div>
          </div>
          <div className="suggestion-wrap">
            <span>ROFL</span>
            <span>LMK</span>
            <span>NVM</span>
            <span>TBH</span>
            <span>SMH</span>
          </div>
        </fieldset>
        <div className="results">
        <h2>{acronym}</h2>
        <p>{definition}</p>
      </div>
      </form>
      
    </div>
  );
}

export default App;
