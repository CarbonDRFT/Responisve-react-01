import React from 'react'
import './feature.css'

function Feature({title, text}) {
  return (
    <div className='gpt3__features-container__feature'>
      <div className="gpt3__features-container_feature-title">
        </div>
        <h1>{title}</h1>
        <div className="gpt3__features-container_feature-text">
        {text}
        </div>
      </div>
  
  )
}

export default Feature