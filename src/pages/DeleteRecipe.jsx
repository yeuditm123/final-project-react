import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios library for making HTTP requests
import deleteRequset from '../helpers/deleteRequest'

import './DeleteRecipe.css'

function DeleteRecipe() {
  const [recipeName, setRecipeName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await deleteRequset(`recipes/deleterecipe/${recipeName}`);
    setMessage(success ? 'המתכון נמחק בהצלחה!' : 'לא הצלחנו למחוק את המתכון.');
  };

  useEffect(() => {
    const timeout = setTimeout(() => setMessage(''), 3000);
    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div>
      <h2 className='title'>Delete Recipe by Name</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipeName">Recipe Name:</label><br/>
        <input 
          className='add-input'
          type="text"
          id="recipeName"
          value={recipeName}
          onChange={handleChange}
        /><br/>
        <br/>
        <button className='submitButton' type="submit">Delete Recipe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteRecipe;
