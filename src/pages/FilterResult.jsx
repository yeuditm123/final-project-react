import React from 'react';
import { useEffect ,useState } from 'react';
import GetRequest from '../helpers/getRequest';
import RecipeCard from '../components/basic/RecipeCard';


function FilterResult({ user, likes, getUserLikes, recipes} ) {

  const productsInRecipe = JSON.parse(localStorage.getItem('wantProducts'));
  const productsNotInRecipe = JSON.parse(localStorage.getItem('dontWantProducts'));
  const products = JSON.parse(localStorage.getItem('products'));

  const productsInRecipeIds = [];
  const productsNotInRecipeIds = [];

  const [finalResults, setFinalResults] = useState([]);
  
  if(productsInRecipe.length >0){
    productsInRecipe.forEach(productName => {
      const product = products.find(p => p.product_name === productName);
      if (product) {
        productsInRecipeIds.push(product.product_id);
      }
    });
  }
  else{
    productsInRecipeIds.push(',');
  }
  if(productsNotInRecipe.length > 0){
    productsNotInRecipe.forEach(productName => {
      const product = products.find(p => p.product_name === productName);
      if (product) {
          productsNotInRecipeIds.push(product.product_id);
      }
    });
  }
  else{
    productsNotInRecipeIds.push(',');
  }

  useEffect(() => {
    GetRequest(`recipes/recipeByParams/${productsInRecipeIds}/${productsNotInRecipeIds}`)
      .then(res => {
        console.log("useEffect", res);
        setFinalResults(res);
      })
      .catch(e => console.log(e));
  }, []);


  return (
    <div className="allrecipes">

    {finalResults.length > 0 ? (
      (finalResults).map((item) => {
        const isLiked = likes.includes(item.recipe_id);
        return <RecipeCard key={item.recipe_id} title={item?.recipe_name} img={item?.recipe_img} data={item}
          user={user} isLiked={isLiked} getUserLikes={getUserLikes} />;
      })
    ) : (
      <p>There is no recipe according to your filter...</p>
    )}
  </div>
  );
}

export default FilterResult;


