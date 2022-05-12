import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios' 
import {useParams} from "react-router-dom"


function CharacterDetails() {

       const [details, setDetails] = useState({})
       const myObj = useParams() // useParams creates a object
       const userId = myObj.characterId // we need to get the Id out the object 

    useEffect(() =>{
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${userId}`)
    .then( response => {
      setDetails(response.data)
    })
    .catch((err) => {console.log("There was an error getting character from the database", err)});
  }, [userId])
    

  return (
     
    <div className="App">
        <h1>{details.name} </h1>
      <div className="box">
        Occupation: {details.occupation}<br/>
        Weapon: {details.weapon} <br/>
        Debt: {details.debt ? "yes" : "no" } <br/>

    </div>
    </div>
  ) 
  
  
}

export default CharacterDetails
