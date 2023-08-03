import React from 'react'
import "../App.css"
export default function DataComponent({image}) {
  return (
    <div>
        <img src={image} alt='elephant'/>
    </div>
  )
}
