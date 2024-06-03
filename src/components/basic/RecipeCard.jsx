import React ,{useState}from 'react';
import { Card, Image, Col } from 'antd';
import { Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import {HeartOutlined, HeartFilled } from '@ant-design/icons';
import StarRating from './StarRating';
import './pictureCard.css';
import PostRequest from '../../helpers/postRequest';

//add className and add div that will ger this class name
function RecipeCard({ title, img, data,user, isLiked,getUserLikes }) {
  const navigate = useNavigate();

  const url = window.location.href;
  const parts = url.split('/');
  const lastWord = parts.pop();
  const [userRating, setUserRating] = useState(0);

  const isAdmin = user && user.isAdmin == 1;

  const handleClick = (currentData) => {
    localStorage.setItem('currentRecipe', JSON.stringify(currentData));
    localStorage.setItem('previewUrl', lastWord);
    navigate('/recipe');
  };

  const handleLike = async()=>{
    if(!user?.email){
      return alert('You must be logged in to like recipes')
    }
    try {
      await PostRequest('recipes/likes', {
        type: isLiked ? 'unlike': 'like',
        recipe_id: data.recipe_id,
        email: user.email
      })

      getUserLikes(user.email)
    } catch (err){
      console.log(err)
    }
  }


  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
    const recipeId = data.recipe_id;
  
    // Send the rating to the server
    PostRequest(`recipes/rating`,{
      newRating : newRating,
      recipeid : recipeId
    })
      .then((response) => {
        if (response.status == 200) {
          console.log('Rating updated successfully');
        } else {
          throw new Error('Failed to update rating');
        }
      })
      .catch((error) => console.error('Error:', error.message)); 
  };
  return (
    <div className='propeties'>
      <Card  title={title} >
        <Image
          src={img}
          alt={'pleas give me picture'}
          width={300}
          height={200}
          onClick={() => {
            handleClick(data);
          }}
        />
      </Card>
      {
        !isAdmin  && ( isLiked ? <HeartFilled onClick={handleLike} />:<HeartOutlined onClick={handleLike}/>)} 

      
       <div  classNames ='startRating'>

       {
          !isAdmin &&    <StarRating   onRate={handleRatingChange} />
       }
    
       </div>
       <span style={{ color:'#714618'}}>RATING : {data.recipe_rating}</span>
       <br/>
       {
        !isAdmin    &&   <span style={{ color:'#714618'}}>YOUR RATING : {userRating}</span>

       }
    </div>
  );
}
export default RecipeCard;
/* <Row>
          <Col span={8}>
            <Card title={title}>
              <Image src={data} alt={'jj'} width={300} height={200} />
            </Card>
          </Col>
      </Row> */
