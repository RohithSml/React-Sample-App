import React, { useState, useEffect } from 'react';
import ToggleText from './components/ToggleText';
import Counter from './components/Counter';
import { useNavigate } from 'react-router-dom';

const Home = ({title, description, number}) => {
   let noR = true;
   const [show, setShow] = useState(false);
   const [age , setAge] = useState(0);
   const [obj, setObj] = useState({ a: 1, b: 2})
   
   const handleShow = () => {
    setShow(show => !show);
    setTimeout(() => {
        
    }, 5000);
   }

   const handleObj = () =>{
         setObj({...obj, a: 2});
   }

   const handleAge = () => {
    setAge(age => age + 1);
   }
   const navigate = useNavigate();

   useEffect(() => {
    if(age > 30){
        console.log("Mid Age Crisis");
    } 
    console.log("Hello World");
   }, [age, show])


    return (
        <div>
            {/* <button onClick={handleAge}> Test Case</button> */}
            <button onClick={()=>{navigate('/dashboard')}}> Navigate to Dashboard</button>

            <button onClick={handleAge}> Age Adder</button>
            {age}
           
            {/* <h1>{title} - {number}</h1>
            <p>{description}</p> */}
            {/* <button onClick={handleOnR}>Toggle noR - {noR}</button> */}
            {/* <ToggleText show={show} handleShow={handleShow} title={title} description={description} /> */}
            <div style={{padding: '20px'}}>
                <Counter />
            </div>
        </div>
    );
};

export default Home;
