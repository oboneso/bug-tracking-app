import React from 'react'
import bugImg from './bug.svg'
import { bugImage, bugImageDiv } from './bugImage.module.css'


const BugImage = () => {
  return (
    <div className={bugImageDiv}>  
      <img src={bugImg} className={bugImage} alt="BugImage"/>
    </div>
  )
}

export default BugImage

