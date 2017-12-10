import React from 'react'

const BackPaperPage = () => {
    return [2.75 , 1.05 , 2.22 , 0.52 , 0.98].map((page , index) => {
      const oparetor = index % 2 === 0 ? "-" : "+";
      return (
        <div 
          key={index} 
          className="paper" 
          style={{transform : `rotate(${oparetor + page}deg)`}}>
            <div className="resume-border"></div>
        </div>
      )
    })
  }

export default BackPaperPage
