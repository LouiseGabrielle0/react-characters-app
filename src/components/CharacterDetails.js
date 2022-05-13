// import React from 'react'
// import {useEffect, useState} from 'react'
// import axios from 'axios' 
// import { useEffect } from "react"
import {useParams} from "react-router-dom"


function CharacterDetails(props) {

      //  const [details, setDetails] = useState({})
      //  const myObj = useParams() // useParams creates a object
      //  const userId = myObj.characterId // we need to get the Id out the object 

        const {characterId} = useParams()
        const charactersArr = props.details

       console.log(charactersArr)

      
        const characterDetails = charactersArr.find((character) => {
          return  character.id == characterId;
        })
        
     const renderDetails = () => {
       return(
       <>
       <div className="box">
       <h2>{characterDetails.name}</h2>
        Occupation: {characterDetails.occupation}<br/>
       Weapon: {characterDetails.weapon} <br/>
        Debt: {characterDetails.debt ? "yes" : "no" } <br/>
        </div>
       </>
       )
     }
        

  return (
     
    <div className="App">
      {characterDetails ? renderDetails() : <p> Loading....</p>}
    </div>
  ) 
  
  
}

export default CharacterDetails
