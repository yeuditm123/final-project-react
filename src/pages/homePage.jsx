import React, {useEffect} from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import GetRequest from "../helpers/getRequest";


function Homepage({user, setUser ,setRecipes}) {

//   useEffect(()=>{
//   GetRequest("recipes/all").then(res => {
//     localStorage.setItem('myRecipes',JSON.stringify(res) )
//     setRecipes(res);
// }
// ).catch(e => console.log(e))

//  },[]);


  return (
    <div
      style={{
        backgroundImage: "url('https://foodislife.co.il/wp-content/uploads/2023/05/pistachio-macaroons-dessert-white-background-top-view.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "20px",
        color: "#FF69B4", 
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "6rem", fontWeight: "bold", fontFamily: "cursive", color: "#714618" }}>
        SWEETIME
      </h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        {}
        <style>
          {`
            .recipeButton {
              width: 300px;
              height: 50px;
              text-align: center;
              font-size: 20px;
              background-color: rgb(184,183,93);
              color: white;
              border: none;
              border-radius: 10px;
              cursor: pointer;
            }
            .recipeButton:hover {
              background-color: rgb(238,236,183);
            .recipeButton:hover {
             color: black;
            }
          `}
        </style>

        <Link to="/all">
          <Button type="button" className="recipeButton">
            Explore All Recipes
          </Button>
        </Link>

        <Link to="/Wantingredints">
          <Button type="button" className="recipeButton">
          The perfect recipe for you
          </Button>
        </Link>

       
        <br /><br /><br />
        {
          !user?.email ? <>
 <Link to="/Login">
          <Button type="button" className="recipeButton">
            Login
          </Button>
        </Link>
        <Link to="/Signup">
        <Button type="button" className="recipeButton">
          Sign up
        </Button>
        </Link>
          </>
: <div>
  <Button type="button" className="recipeButton" onClick={()=>{
    localStorage.removeItem('user')
    setUser(null)
  }}>
            logout
          </Button>
</div>        }
       
      </div>
    </div>
  );
}

export default Homepage;

