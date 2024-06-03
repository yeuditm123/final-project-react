import React from 'react';
import Homepage from '../pages/homePage';
import { Layout } from 'antd';


function Home({user, setUser ,setRecipes}) {
  //window.document.title = 'Sweetime';

  return (
    <Layout>
    <Homepage
    user={user}
    setUser={setUser}
    setRecipes={setRecipes}
    />
    </Layout>
   
  );
}

export default Home;