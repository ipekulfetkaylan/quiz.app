import React from 'react'
import "./modal.css";
import { useNavigate } from 'react-router-dom';

const Modal = ({score, clickAnswer}) => {

    const navigate= useNavigate()
  return (
    <div className='modal-container'>
        <div className="modal-inner">
            <span>Score : {score} </span>
            <button onClick={()=> navigate("/")} className='modal-btn'>Yeniden Başla</button>
        </div>
        <p className='option-title'>The answers you choose</p>
        <ul className='option-list'>
        {
            clickAnswer.map((dt, i)=>{
                return <li key={i}>{dt}</li>
            })
        }
        </ul>
      
    </div>
  )
}

export default Modal
