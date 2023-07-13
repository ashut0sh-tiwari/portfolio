import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <a href={item.link}><img src={item.image} alt="" className="work__img" /></a>
        <h3 className="work__title">{item.title}</h3>
        <a href={item.link} className="work__button">Demo
        <i className='bx bx-right-arrow-alt work__button-icon'></i></a>
    </div>
  )
}

export default WorksItems