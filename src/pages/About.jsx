import React from 'react';
import BasicButton from '../components/basic/BasicButton';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className='aboutHeader' style={{ marginBottom: "20px", fontSize: "6rem", fontWeight: "bold", fontFamily: "cursive", color: "#714618"}}>
        SWEETIME
      </h1>
      <h3 className='aboutHeader'>Welcome to Our Recipe Site</h3>
      <p className='aboutHeader'>
      Desserts. Our site is an advanced recipe site<br/>

Nowadays you can find many apps and websites for recipes including those of well known chefs.<br/>

We came up with a solution that will give our website users a high level experience.<br/>

When people enter the kitchen to prepare something, they may find themselves in a frustrating situation as they discover that they are missing Ingredients.
It can happen late at night or if the supermarket is not within walking distance, and they will give up on making the recipe with disappointment.<br/>

Our site offers a super solution to this specific problem:<br/>

The user selects his available grocery list/ unavailable groceries - and the site will offer him recipes according to his choice.<br/>

No more surfing and searching through dozens of irrelevant recipes with hunger pains.. from today You will get only relevant and practical recipes.
In addition, the website offers a rating for each recipe, when a user meets a
highly rated recipe it will give him confidence and certainty that he is choosing the best for him.<br/>

The site offers a personal area where you can save all your favorite recipes.<br/>

We aim to give our users an efficient and effective browsing experience
And of course, a delicious one.
      </p>
      {/* <BasicButton size='large' text='Learn More' /> */}
    </div>
  );
}

export default About;

