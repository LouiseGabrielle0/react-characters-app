import "./App.css";
import axios from 'axios' 
import { useEffect, useState } from "react";
import {Routes, Route,} from "react-router"
import {NavLink} from "react-router-dom"
import CharacterDetails from "./components/CharacterDetails";

function App() {

  const [characters, setCharacters] = useState([])
// useEffect to get the data from the API
  useEffect(() => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
    .then( response => {
      setCharacters(response.data)
      console.log(characters)
    })
    .catch((err) => {console.log("There was an error getting info from the database", err)});
  }, [])

  //function to map through the array and create the list of objects
  const createListOfCharacters = () => {
    return (
      <div className="App">
      <h1>React Characters App</h1>
      <h2>List of Characters in our DB:</h2>
      {characters.length > 0 ? characters.map((person) => {
        return (
          <div key={person.id} className="box">
          <h3>{person.name}</h3>
          <h4>Occupation {person.occupation}</h4>
          <NavLink to={`/characters/${person.id}`}>More Details</NavLink>
          </div>
        )
      }): <p>"Loading....."</p>}
      </div>    
    )
  }



  return (
     
    <>
      
      <Routes>
      <Route path="/" element={createListOfCharacters()}/>
      <Route path="/characters/:characterId" element={<CharacterDetails/> } 
      /> 
      </Routes>
   
     
    </>
  );
}

export default App;
