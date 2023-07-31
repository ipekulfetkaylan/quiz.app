import React, { useState } from 'react';
import "./introduce.css";
import Dropdown from '../../components/dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';
import Quiz from '../quiz/Quiz';

const Introduce = () => {
  
 const [difficulty, setDifficulty]= useState("");
 const data= ["easy", "medium", "hard"];
 const total_questions=10;
 const navigate= useNavigate("");

 const startQuiz= ()=>{
    if(difficulty){
        navigate(`/quiz/${difficulty}/${total_questions}`);
        <Quiz/>
    }
 }



  return (
    <>
    <div className="introduce-container">
        <div className="introduce-inner">
            <img
             src="https://img.gamepix.com/games/trivia-quiz/cover/trivia-quiz.png?width=600&height=340&fit=cover&quality=90" 
             alt="" />
             <Dropdown setDifficulty={setDifficulty} data={data} />
             <button onClick={startQuiz} className='start-btn'>Quize Başla</button>
        </div>
    </div>
    
    </>
  )
}

export default Introduce
