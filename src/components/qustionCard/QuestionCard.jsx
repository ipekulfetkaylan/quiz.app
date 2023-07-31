
import Modal from "../modal/Modal";
import "./questionCard.css";

import React, { useEffect, useState } from 'react'

const QuestionCard = ({questionData,score,setScore,count,setCount,modal,setModal}) => {

    const [timer, setTimer]= useState(10);
    const [clickAnswer, SetClickAnswer]= useState([]);
    
    const approvedChoice = (e)=>{
     SetClickAnswer([...clickAnswer, e.target.value]);
     const checkAnswer = e.target.value === questionData[count]?.correct_answer;
     //console.log(checkAnswer);
     if(checkAnswer){
        setScore(score + 10)
     }
     setCount(count + 1)
     if(count === 9) {
        setModal(true)
      }
      setTimer(10)
    }

    useEffect(()=>{
        const interval= setInterval(()=>{
            if(timer > 0){
                setTimer(timer - 1)
            }
            if(timer === 0 && count < 10){
                setCount(count + 1)
                setTimer(10)
            }else if(count >=10) setModal(true)
        },1000)

        return ()=>clearInterval(interval)

    },[timer])
    //console.log(clickAnswer);
  return (
   modal ? <Modal score={score} clickAnswer={clickAnswer}/> : 
   <div className="questionCard">
     <div className="qustionCard-inner">
        <div className="timer">{timer}</div>
        <div className="question">{count + 1 }/10 - {questionData[count]?.question}</div>
           
                {
                    questionData[count]?.answer.map((anw,i)=>(
                        <button className="answer" onClick={approvedChoice} key={i} value={anw}>{anw}</button>
                    ))
                }
            
    </div>
   
   </div>
  )
}

export default QuestionCard
