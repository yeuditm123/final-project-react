import React, { useEffect, useState } from 'react';
import './Recipes.css';
import GetRequest from "../helpers/getRequest";
import AutoCompleteInput from '../components/basic/autoCompletInput'
import RecipeCard from '../components/basic/RecipeCard';
import './autoCompletInput.css'


function Recipes({ user, likes, getUserLikes, recipes,setRecipes }) {



  useEffect(()=>{
    GetRequest("recipes/all").then(res => {
      localStorage.setItem('myRecipes',JSON.stringify(res) )
      setRecipes(res);
  }
  ).catch(e => console.log(e))
  
   },[]);


  return (
    <>
      <div className='centered-input' style={{ marginLeft: '10%' }}>
        <AutoCompleteInput
          opt={recipes}
        />
      </div>
      <div className="allrecipes">

        {recipes.length > 0 ? (
          (recipes).map((item) => {
            const isLiked = likes.includes(item.recipe_id);
            return <RecipeCard key={item.recipe_id} title={item?.recipe_name} img={item?.recipe_img} data={item}
              user={user} isLiked={isLiked} getUserLikes={getUserLikes} />;
          })
        ) : (
          <p>Loading recipes...</p>
        )}
      </div>
    </>
  );
}

export default Recipes;
