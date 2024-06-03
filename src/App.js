import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Cookies from './pages/Cookies';
import Profile from './pages/Profile';
import Cakes from './pages/Cakes';
import Deserts from './pages/Deserts';
import Headers from './components/common/Headers';
import Wantingred from './pages/Wantingredients';
import Recipes from './pages/Recipes';
//import Noingred from './pages/Noingredients';
import Login from './pages/Login';
import Footers from './components/common/Footers';
import Signup from './pages/signup';
import Recipe from './pages/recipe';
import FilterResult from './pages/FilterResult';
import GetRequest from './helpers/getRequest';
import AddRecipe from './pages/AddRecipe';
import DeleteRecipe from './pages/DeleteRecipe';
import UpdateRecipe from './pages/UpdateRecipe';

function App() {
  const [user, setUser] = useState();
  const [likes, setLikes] = useState([]);
  const [recipes ,setRecipes] = useState( JSON.parse(localStorage.getItem('myRecipes') ?? '[]'));

  useEffect(() => {
    const localUserData = localStorage.getItem('user');
    if (localUserData) {
      setUser(JSON.parse(localUserData));
    }
  }, []);

  console.log("NBGHJ",recipes);
  const likedRecipes = recipes.filter((recipe) => likes.includes(recipe.recipe_id));

  console.log(likes);

  const getUserLikes = (email) => {
    GetRequest('recipes/likes/' + user.email).then((value) => {
      setLikes(value);
    });
  };

  useEffect(() => {
    if (user?.email) {
      getUserLikes(user.email);
    }
  }, [user?.email]);

  console.log({recipes})

  const cakesRecipes = recipes.filter(item => item.category_id == 2);
  const cookiesRecipes = recipes.filter(item => item.category_id == 1);
  const desertsRecipes = recipes.filter(item => item.category_id == 3);
  useEffect(()=>{
    if( user?.isAdmin){
      getUserLikes(user.isAdmin)
    }

  },[user?.isAdmin])

  return (
    <>
      <Headers user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home  user={user} setUser={setUser} setRecipes={setRecipes} />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile likedRecipes={likedRecipes} getUserLikes={getUserLikes} user={user} />} />
        <Route path='/cakes' element={<Recipes user={user} likes={likes} getUserLikes={getUserLikes} recipes={cakesRecipes} setRecipes={setRecipes} />} />
        <Route path='/cookies' element={<Recipes user={user} likes={likes} getUserLikes={getUserLikes} recipes={cookiesRecipes} setRecipes={setRecipes}/>} />
        <Route path='/deserts' element={<Recipes user={user} likes={likes} getUserLikes={getUserLikes} recipes={desertsRecipes} setRecipes={setRecipes}/>} />
        <Route path='/Wantingredints' element={<Wantingred />} />
        <Route path='/all' element={<Recipes user={user} likes={likes} getUserLikes={getUserLikes} recipes={recipes} setRecipes={setRecipes} />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/Login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
        <Route path='/FilterResult' element={<FilterResult user={user} likes={likes} getUserLikes={getUserLikes} recipes={recipes} />} />
        <Route path="/addRecipe" element ={<AddRecipe/>}/>
        <Route path="/deleteRecipe" element ={<DeleteRecipe/>} />
        <Route path="/updateRecipe" element ={<UpdateRecipe/>} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footers />
    </>
  );
}

export default App;
