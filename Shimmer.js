import React from 'react'
import "./index.css"
const Shimmer = () => {
  return (
    <div className="restuarantcardList">
      {
        Array(10).fill("").map(
          (e, index)=> 
          (<div key={index}className="shimmerCard"></div>)
        )
      }
      
      </div>
    
  )
}

export default Shimmer