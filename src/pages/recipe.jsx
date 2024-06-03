import React, { useEffect } from 'react';
import { Layout, Image, List } from 'antd';
import BasicButton from '../components/basic/BasicButton';
import { useNavigate } from 'react-router-dom';

import './recipe.css';

const { Header, Sider, Content } = Layout;

function Recipe() {
  const navigate = useNavigate();

  const prevUrl = localStorage.getItem('previewUrl');

  const handleClick = () => {
    navigate('/all');
  };

  const currentRecipe = JSON.parse(localStorage.getItem('currentRecipe'));
  console.log(currentRecipe);
  const inputString = currentRecipe.recipe_prepare;
  const myObject = inputString.split('\n').map((line) => {
    return { text: line.trim() };
  });
  const filterData = myObject.filter((obj) => obj.text !== '');

  useEffect(() => {
    return () => {
      localStorage.removeItem('previewUrl');
    };
  }, []);

  return (
    <div>
      <Layout style={{ flexDirection: 'column'  }}>
        <Header style={{backgroundColor: 'rgb(184, 183, 93)'}}> 
          <div className='recipe-name' >{currentRecipe.recipe_name}</div>
        </Header>
        <div>
            <BasicButton text='back' onClick={handleClick} />
          </div>
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       
          <Content>
            <div className='layout-recipe-page'>
              <div className='content'>
                {/* <div>
                  <h3>Ingridients:</h3>

                  {currentRecipe.ingridients?.split(',').map((ingredient) => {
                    return <div>{ingredient}</div>;
                  })}
                </div> */}
                <div>
                  <h3 style={{ color: '#714618'}}>recipe:</h3>

                  {filterData.map((item) => {
                    return <div className='preparation-step'>{item.text}</div>;
                  })}
                </div>
              </div>

              <Sider width='25%' style={{ display: 'flex', alignItems: 'flex-start', backgroundColor:'white' }}>
                <Image
                  src={currentRecipe.recipe_img}
                  alt={'Please give me a picture'}
                  width={500}
                  height={320}
                  onClick={() => {
                    handleClick(currentRecipe);
                  }}
                />
              </Sider>
            </div>
          </Content>
          <br />
         
        </div>
      </Layout>
    </div>
  );
}

export default Recipe;

