import React, { useState, useEffect } from 'react';
import PutRequest from '../helpers/putRequest';
import './UpdateRecipe.css'

function UpdateRecipe() {
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
      const recipename = recipeData.recipe_name;
      const success = await PutRequest(`recipes/updaterecipe/${recipename}`, recipeData);
      setMessage(success ? 'המתכון עודכן בהצלחה!' : 'לא הצלחנו לעדכן את המתכון.');
    } catch (error) {
      console.error(error);
      setMessage('אירעה שגיאה בעת עדכון המתכון.');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setMessage(''), 3000); // הסרת ההתראה לאחר 3 שניות
    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div>
      <h2 className='title'>Update Recipe (not update recipe name )</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="category_id">Category ID:</label><br/>
          <input
           className='add-input'
            type="text"
            id="category_id"
            name="category_id"
            value={recipeData.category_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe_name">Recipe Name:</label><br/>
          <input
           className='add-input'
            type="text"
            id="recipe_name"
            name="recipe_name"
            value={recipeData.recipe_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe_prepare">Recipe Preparation:</label><br/>
          <textarea
           className='add-input'
            id="recipe_prepare"
            name="recipe_prepare"
            value={recipeData.recipe_prepare}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe_img">Recipe Image URL:</label><br/>
          <input
           className='add-input'
            type="text"
            id="recipe_img"
            name="recipe_img"
            value={recipeData.recipe_img}
            onChange={handleChange}
          />
        </div>
        <button className='submitButton' type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default UpdateRecipe;
