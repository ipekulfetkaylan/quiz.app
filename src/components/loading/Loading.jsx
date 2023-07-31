import React from 'react'
import Spinner from "./Spinner.gif"

const Loading = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100vh", backgroundImage: "linear-gradient(#F6C930, #FFF2DB)"}}>
      <img src={Spinner} alt="Loading..." />
    </div>
  )
}

export default Loading
