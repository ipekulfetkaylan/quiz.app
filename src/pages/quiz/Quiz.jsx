import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as api from "../../api/api";
import QuestionCard from '../../components/qustionCard/QuestionCard';
import Loading from '../../components/loading/Loading';


const Quiz = () => {

  const {difficulty,amount} = useParams();
  const [questionData, SetQuestionData]= useState([]);
  const [score, setScore]= useState(0);
  const [count, setCount]=useState(0);
  const [modal, setModal]=useState(false)
  const [loading, setLoading]= useState(true)

  useEffect(()=>{
    const getData= async () =>{
      const data= await api.fetchQuizData(difficulty,amount);
      SetQuestionData(data)
      setLoading(false)
    }
    getData()
  },[])

  return (
    <div>
      {
        loading ? <Loading/>:
        <QuestionCard 
        questionData={questionData} 
        score={score}
        setScore={setScore}
        count={count}
        setCount={setCount}
        modal={modal}
        setModal={setModal}
        />    
      }
    </div>
  )
}

export default Quiz
