import React, { useEffect ,useState } from 'react';
import './Wantingredients.css'
import DropDown from '../components/basic/DropDown';
import GetRequest from '../helpers/getRequest';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';




function Wantingred() {

  const [selectedValues1, setSelectedValues1] = useState([]);
  const [selectedValues2, setSelectedValues2] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    GetRequest("products/all").then(res => {
    console.log("useEffect", res);
      localStorage.setItem('products',JSON.stringify(res) )
  }
  ).catch(e => console.log(e))
   },[]);

   const handleDropDown1Change = (values) => {
    setSelectedValues1(values);
  };

  const handleDropDown2Change = (values) => {
    setSelectedValues2(values);
  };

   const checkDuplicate =()=>{
     let isDuplicated = false;
      for(let i=0; i<selectedValues1.length ; i++){
         const currItem= selectedValues2.find(s=>s==selectedValues1[i]);
         if (currItem) {
          isDuplicated = true;
          break;
         }
      }

      if (isDuplicated) {
        alert("Oops! You chose a duplicated product. Please change it.");
      } else {
        localStorage.setItem('wantProducts',JSON.stringify(selectedValues1) ) ;   
        localStorage.setItem('dontWantProducts',JSON.stringify(selectedValues2) ) ; 
        navigate('/FilterResult');
      }
   }
   
  return (
      <div>
        <div className='IngredientsDiv'>
          <p className='dropDown'>Ingredients that you want: </p>
         <DropDown onChange={handleDropDown1Change} />
         <p className='dropDown'>Ingredients that you dont want: </p>
         <DropDown onChange={handleDropDown2Change} />
        </div>
  
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>         
           <Button type="button" className="rButton"  onClick={checkDuplicate}>
              Search
            </Button>
        </div>
      </div>
  );
  


}


export default Wantingred;
