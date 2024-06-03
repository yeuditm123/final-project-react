import React from 'react';

function homepage(){
    return (
    <div>  
        <h1>SWEET TIME</h1>
        <image src = "src\assets\images\backgroundHp.jpg"
        style ={{width: "100%" , height: "100%",objectFit: "cover" ,}} />

<div style={{ display: "flex", justifyContent: "flex-start", margin: "10px" }}> 
    
<Button variant="outlined" href="https://www.google.com">for all the recipes on the site</Button>

<Button variant="outlined" href="https://www.google.com"> Search recipes according to desired products </Button>

<Button variant="outlined" href="https://www.google.com">Searching for a recipe that does not contain certain ingredients  </Button>

 </div>
    </div>);
}
export default homepage;

