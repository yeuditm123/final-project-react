import React, { useState, useEffect } from 'react';
import PostRequest from '../helpers/postRequest';
import BasicInput from '../components/basic/BasicInput';
import BasicButton from '../components/basic/BasicButton'

import './AddRecipe.css'

function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
    category_id: '',
    recipe_name: '',
    recipe_rating: 0,
    recipe_prepare: '',
    rating_count: 0,
    recipe_img: ''
  });

  const [message, setMessage] = useState(''); // הוספת State עבור הודעת ההתראה

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({
      ...recipeData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const success = await PostRequest('recipes/addrecipe', recipeData); // Await for result
      setMessage(success ? 'המתכון הוסף בהצלחה!' : 'לא הצלחנו להוסיף את המתכון.');
    } catch (error) {
      console.error(error); // Log any errors
      setMessage('אירעה שגיאה בעת הוספת המתכון.');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setMessage(''), 3000); // הסרת ההתראה לאחר 3 שניות
    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div>
      <h2 className='title'>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
      <div className='add-style'>
          <label htmlFor="category_id">Category ID:</label><br/>
          <input
            type="text"
            className='add-input'
          //  id="category_id"
            name="category_id"
           // value={recipeData.category_id}
            onChange={handleChange}
          />
        </div>
        <div className='add-style'>
          <label htmlFor="recipe_name">Recipe Name:</label><br/>
          <input
            className='add-input'
            type="text"
            //id="recipe_name"
            name="recipe_name"
          //  value={recipeData.recipe_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe_prepare">Recipe Preparation:</label><br/>
          <textarea
            className='add-input'
          //  id="recipe_prepare"
            name="recipe_prepare"
          //  value={recipeData.recipe_prepare}
            onChange={handleChange}
          />
        </div>
        <div className='add-style'>
          <label htmlFor="recipe_img">Recipe Image URL:</label><br/>
          <input
            className='add-input'
            type="text"
          //  id="recipe_img"
            name="recipe_img"
          //  value={recipeData.recipe_img}
            onChange={handleChange}
          />
        </div>
        <button className='submitButton' type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default AddRecipe;
