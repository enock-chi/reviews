import React, { useState } from 'react'
import people from '../data/Data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index];

  const checkNum = (num) => {
   if (num > people.length-1){
     return 0
   } else if (num < 0){
     return people.length -1
   } else {
     return num
   }

  }


  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = checkNum(index - 1);
      return newIndex;
    })
  }

  const nxtPerson = () => {
    setIndex((index) => {
      let newIndex = checkNum(index + 1);
      return newIndex
    });

  }

  const randPerson = () =>{
    let randNum = Math.floor(Math.random() * (people.length));
    if (randNum === index){
      randNum = index + 1;
    }
    setIndex(checkNum(randNum));
  }


  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'><FaQuoteRight /></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
        <button className='next-btn' onClick={nxtPerson}><FaChevronRight /></button>
      </div>
      <button className='random-btn' onClick={randPerson}>Random review</button>
    </article>
  )
}

export default Reviews
